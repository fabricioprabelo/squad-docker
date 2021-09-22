import { Ctx, Query, Resolver } from "type-graphql";
import Context from "../support/Context";
import Permission from "../types/Permission";
import Logger from "../support/Logger";
import PermissionsRepository from "../repositories/PermissionsRepository";

@Resolver()
export default class Permissions {
  permissionsRepository: PermissionsRepository;
  constructor() {
    this.permissionsRepository = new PermissionsRepository();
  }
  @Query(() => [Permission])
  async permissions(@Ctx() ctx?: Context): Promise<Permission[]> {
    ctx && (await ctx.isAuthenticated());

    try {
      return this.permissionsRepository.getEntities();
    } catch (err) {
      Logger.error(err);
      return err;
    }
  }
}
