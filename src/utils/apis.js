
// export const baseUrlUsaWin = "https://websocket.pasawin.com";
export const baseUrlUsaWin = "https://websocket.giftaura.shop";
export const configModalUsaWin = `${baseUrlUsaWin}/api/`

export const referral_url = "https://websocket.pasawin.com";
export const configModalApk = `${baseUrlUsaWin}/apk/`;
export const configModalBanner = `${baseUrlUsaWin}/public/api/`;

const apis = {
  sendOtp: "https://otp.fctechteam.org/send_otp.php?mode=live&digit=6&mobile=",
  verifyOtp: "https://otp.fctechteam.org/verifyotp.php?mobile=",


  createUserId: `${configModalUsaWin}otp-register`,
  register: `${configModalUsaWin}register`,
  login: `${configModalUsaWin}login`,
  profile: `${configModalUsaWin}profile?id=`,
  changePassword: `${configModalUsaWin}changePassword`,
  fundTransfer: `${configModalUsaWin}main_wallet_transfers`,

  //wingo game urls
  wingo_bet: `${configModalUsaWin}bets`,
  wingo_my_history: `${configModalUsaWin}bet_history`,
  wingo_game_history: `${configModalUsaWin}results`,
  wingo_win_amount_announcement: `${configModalUsaWin}win-amount`,
  get_result_trx: `${configModalUsaWin}get_result`,

  // jilli

  //chicken road game
  chickenMultplier: `${configModalUsaWin}multiplier`,
  chickenCashout: `${configModalUsaWin}cashout`,
  chickenbet: `${configModalUsaWin}bet`,
  login: `${configModalUsaWin}login`,
  register: `${configModalUsaWin}register`,
  // profile: `${configModalUsaWin}profile`,
  updateProfile: `${configModalUsaWin}update_profile`,
  betHisotry: `${configModalUsaWin}history?user_id=`,
  getPaymentMethod: `${configModalUsaWin}adminMethodPayment?type=`,
  add_amount: `${configModalUsaWin}add_amount`,
  withdrawal_request: `${configModalUsaWin}withdrawal_request`,
  avatar_request: `${configModalUsaWin}avatar_list`,
  avatarUpdate_request: `${configModalUsaWin}update_avatar?user_id=`,
  gameRule_request: `${configModalUsaWin}getGameRules`,
  deposit_history: `${configModalUsaWin}payinHistory?user_id=`,
  withdraw_history: `${configModalUsaWin}withdrawHistory?user_id=`,
  download_apk: `${configModalApk}chickenroad.apk`,
  banner_image: `${configModalBanner}getBanners`,
  bet_value: `${configModalBanner}bet_values`,

  depositHistory: `${configModalUsaWin}deposit_history`,
  addAccount: `${configModalUsaWin}add_account`,
  accountView: `${configModalUsaWin}Account_view`,
  usdtaccountView: `${configModalUsaWin}usdt_account_view?user_id=`,
  payout_withdraw: `${configModalUsaWin}withdraw`,
  usdtpayout_withdraw: `${configModalUsaWin}usdtwithdraw`,
  withdrawHistory: `${configModalUsaWin}withdraw_history`,
  promotionData: `${configModalUsaWin}agency-promotion-data-`,
  subordinateData: `${configModalUsaWin}subordinate-data`,
  commisionDetails: `${configModalUsaWin}commission_details?userid=`,
  tier: `${configModalUsaWin}tier`,
  vipLevel: `${configModalUsaWin}vip_level?userid=`,
  vipLevelHistory: `${configModalUsaWin}vip_level_history?userid=`,
  vipLevelAddMoney: `${configModalUsaWin}add_money`,
  redeemGift: `${configModalUsaWin}gift_cart_apply`,
  redeemGiftList: `${configModalUsaWin}gift_redeem_list?userid=`,
  gameStatsHistory: `${configModalUsaWin}total_bet_details?userid=`,
  activityRewards: `${configModalUsaWin}activity_rewards?userid=`,
  activityRewardsClaim: `${configModalUsaWin}activity_rewards_claim`,
  activityRewardsHistory: `${configModalUsaWin}activity_rewards_history?user_id=`,
  attendanceList: `${configModalUsaWin}attendance_List?userid=`,
  attendanceHistory: `${configModalUsaWin}attendance_history?userid=`,
  attendanceClaim: `${configModalUsaWin}attendance_claim`,
  slider: `${configModalUsaWin}slider_image_view`,
  invitation_bonus_list: `${configModalUsaWin}invitation_bonus_list?userid=`,
  invitation_bonus_claim: `${configModalUsaWin}invitation_bonus_claim`,
  transaction_history_list: `${configModalUsaWin}transaction_history_list`,
  transaction_history: `${configModalUsaWin}transaction_history?userid=`,
  Invitation_records: `${configModalUsaWin}Invitation_records?userid=`,
  update_profile: `${configModalUsaWin}update_profile`,
  allAvatar: `${configModalUsaWin}image_all`,
  customer_service: `${configModalUsaWin}customer_service`,
  about_us: `${configModalUsaWin}about_us?type=`,
  beginner_guide: `${configModalUsaWin}beginner_guide`,
  announcement: `${configModalUsaWin}announcement`,
  notification: `${configModalUsaWin}notification/`,
  newSubordinate: `${configModalUsaWin}new-subordinate?id=`,
  payModes: `${configModalUsaWin}pay_modes`,
  account_update: `${configModalUsaWin}account_update/`,
  country: `${configModalUsaWin}country`,
  betting_rebate_history: `${configModalUsaWin}betting_rebate_history?userid=`,
  add_usdt_account: `${configModalUsaWin}add_usdt_account`,
  usdt_account_view: `${configModalUsaWin}usdt_account_view?user_id=`,
  wingo_rules: `${configModalUsaWin}wingo_rules?type=`,
  getPaymentLimits: `${configModalUsaWin}getPaymentLimits`,
  // https://root.bdgcassino.com/api/getjilligame
  // https://root.bdgcassino.com/api/jilligame?user_id=1&amount=10&game_id=36d20c24669dca7630715f2e0a7c18be

  all_game_list: `${configModalUsaWin}getjilligame`,
  get_game_url_to_play: `${configModalUsaWin}jilligame?user_id=`,
  get_game_url: `${configModalUsaWin}get_game_url`,
  all_game_list_spribe: `${configModalUsaWin}get_reseller_info`,
  get_game_url_spribe: `${configModalUsaWin}get_spribe_game_urls`,
  extra_first_deposit_bonus: `${configModalUsaWin}extra_first_deposit_bonus?userid=`,
  getBranchnameByIfsc: `${configModalUsaWin}get-ifsc-details?ifsc=`,
  trx_game_result: `${configModalUsaWin}trx/result`,
  update_jilli_wallet: `${configModalUsaWin}update_jilli_wallet`,
  update_jilli_to_user_wallet: `${configModalUsaWin}update_jilli_to_user_wallet`,
  update_spribe_wallet: `${configModalUsaWin}update_spribe_wallet`,
  update_spribe_to_user_wallet: `${configModalUsaWin}update_spribe_to_user_wallet`,
  feedback: `${configModalUsaWin}feedback`,

  // services

  // https://bdgcassino.apponrent.com/api/change_login_password
  // https://bdgcassino.apponrent.com/api/user-documents
  // https://bdgcassino.apponrent.com/api/submit-old-usdt-address
  // https://bdgcassino.apponrent.com/api/aviator-lucky-bonus
  // https://root.bdgcassino.com/api/deposit_Problem
  // https://root.bdgcassino.com/api/deposit_pending_list?user_id=23
  // https://root.bdgcassino.com/api/withdraw_pending_list?user_id=23
  // https://root.bdgcassino.com/api/withdraw_Problem

  ifsc_modification: `${configModalUsaWin}ifsc_modification`,
  delete_account: `${configModalUsaWin}delete_account`,
  bank_name_modification: `${configModalUsaWin}bank_name_modification`,
  game_problem: `${configModalUsaWin}game_issue_report`,
  change_login_password: `${configModalUsaWin}change_login_password`,
  usdt_user_verification: `${configModalUsaWin}usdt-user-verification`,
  delete_usdt_address: `${configModalUsaWin}submit-old-usdt-address`,
  aviator_lucky_bonus: `${configModalUsaWin}aviator-lucky-bonus`,
  deposit_pending_list: `${configModalUsaWin}deposit_pending_list?user_id=`,
  deposit_Problem: `${configModalUsaWin}deposit_Problem`,
  withdraw_pending_list: `${configModalUsaWin}withdraw_pending_list?user_id=`,
  withdrawProblem: `${configModalUsaWin}withdraw_Problem`,
};

export default apis

