import type { NextApiRequest, NextApiResponse } from 'next';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';
import { table } from '../../utils/Airtable';

const generateMintSignature = async (
    req: NextApiRequest,
    res: NextApiResponse,
) => {
    const { address } = req.body;

    const record = await table
        .select({
            fields: ['address', 'minted'],
            filterByFormula: `NOT({address} != '${address}')`,
        })
        .all();

    if (record.length === 0) {
        return res.status(400).json({
            error: "User isn't in allowlist",
        });
    }

    if (record[0].fields.minted === 'true') {
        return res.status(400).json({
            error: 'User has already minted the access pass',
        });
    }
    const sdk = new ThirdwebSDK(
        new ethers.Wallet(
            process.env.PRIVATE_KEY as string,
            ethers.getDefaultProvider(process.env.ALCHEMY_API_URL),
        ),
    );

    const edition = sdk.getEdition(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
    try {
        const signedPayload = await edition.signature.generateFromTokenId({
            tokenId: 0,
            quantity: '1',
            to: address,
        });

        return res.status(200).json({
            signedPayload,
        });
    } catch (err) {
        return res.status(500).json({
            error: err,
        });
    }
};

export default generateMintSignature;
