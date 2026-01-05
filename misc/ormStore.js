export class OrmStore {
    static store = {}

    static getClassChangeObj(instanceClass) {
        const classChangesObj = this.store.dbChangesObj[instanceClass] ??= {}
        return classChangesObj
    }
}

