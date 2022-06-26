import sdk from '@/utils/thirdweb';
import type { NextApiRequest, NextApiResponse } from 'next';
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

    const edition = sdk.getEdition(process.env.NEXT_PUBLIC_EDITION_ADDRESS);
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
