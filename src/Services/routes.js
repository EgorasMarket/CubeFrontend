// export const BASE_SERVER = "http://localhost:4022";
export const BASE_SERVER = "https://saltlake.usecube.io";

export const LOGIN_ROUTE = `/pub/user/login`;
export const REGISTER_ROUTE = `/pub/user/register`;
export const TRANSACTION_ROUTE = `/portfolio/get/transaction/history`;
export const USER_BALANCE_ROUTE = `/portfolio/get/my/balance`;
export const GET_USER_BANK_NUMBER_ROUTE = `/api/deposit/fiat`;
export const SEND_FUNDS_CRYPTO_ROUTE = `/api/withdrawal/external`;
export const SEND_FUNDS_INTERNAL_ROUTE = `/api/withdrawal/internal`;
export const LIST_BANKS_ROUTE = `/api/withdrawal/list-banks`;
export const VERIFY_BANK_ROUTE = `/api/withdrawal/verify/account`;
export const PROCESS_FIAT_CASHOUT_ROUTE = `/api/withdrawal/cashout`;
export const GENERATE_BANK_ACCOUNT_ROUTE = `/api/user/generate/virtual/account`;
export const UPDATE_BVN_ROUTE = `/api/user/submit/bvn`;
