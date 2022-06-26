import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY as string,
        ethers.getDefaultProvider(process.env.ALCHEMY_API_URL),
    ),
);

export default sdk;
