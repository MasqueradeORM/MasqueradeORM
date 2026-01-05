import { FindObj } from "../misc/types"

export declare class Entity {
  id: string | number | bigint
  updatedAt: Date

    /**
   * Finds instances in the database that match the given argument.
   * Relations do not get filtered by where conditions, only the root instances get filtered.
   * (RootClass.find(arg)) => only RootClass instances matching the where conditions get returned. 
   */
  static find<T extends Entity>(
    this: new (...args: any[]) => T,
    obj: FindObj<T>
  ): Promise<T[]>


  delete(): Promise<void>
  getDependents(): Promise<void>
  getReferencers(): Promise<void>
}

