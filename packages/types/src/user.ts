import type { BasicUserInfo } from '@vben-core/typings';

interface User {
  id: number;
  memberId: number;
  nickName: string;
  phone: number;
  createTime: string;
  avatarUrl: string;
}

/** 用户信息 */
interface UserInfo extends BasicUserInfo {
  // /**
  //  * 用户描述
  //  */
  // desc: string;
  // /**
  //  * 首页地址
  //  */
  // homePath: string;
  //
  // /**
  //  * accessToken
  //  */
  // token: string;

  user: User;
}

export type { UserInfo };
