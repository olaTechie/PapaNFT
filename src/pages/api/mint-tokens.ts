import sdk from '@/utils/thirdweb';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { address } = req.body;
    try {
        const edition = sdk.getEdition(process.env.NEXT_PUBLIC_EDITION_ADDRESS);
        const token = sdk.getToken(process.env.NEXT_PUBLIC_TOKEN_ADDRESS);

        const hasNFT = await edition.getOwned(address);

        if (hasNFT.length === 0) {
            return res.status(400).json({
                error: "User doesn't own the access pass",
            });
        }

        await token.transfer(address, 100);

        return res.status(200).json({
            message: 'Token transferred successfully',
        });
    } catch (err) {
        return res.status(500).json({
            error: err,
        });
    }
};

export default handler;
