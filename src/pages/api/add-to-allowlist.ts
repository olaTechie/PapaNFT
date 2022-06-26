import type { NextApiRequest, NextApiResponse } from 'next';
import { table } from '../../utils/Airtable';

const addToAllowlist = async (req: NextApiRequest, res: NextApiResponse) => {
    const { address } = req.body;

    const record = await table
        .select({
            fields: ['address', 'minted'],
            filterByFormula: `NOT({address} != '${address}')`,
        })
        .all();

    if (record.length > 0) {
        return res.status(400).json({
            error: 'User is already in allowlist',
        });
    }

    if (record.length === 0) {
        try {
            await table.create([
                {
                    fields: {
                        address,
                    },
                },
            ]);
            return res.status(200).json({
                message: 'User added to allowlist',
            });
        } catch (err) {
            return res.status(500).json({
                error: err,
            });
        }
    }
};

export default addToAllowlist;
