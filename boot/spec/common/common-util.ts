export default class CommonUtil {
    public static removePropsItem(props: any, items: Array<string>) {
        let propsCopy = {...props}
        for (let itemIndex in items) {
            let item = items[itemIndex]
            if (propsCopy && propsCopy.hasOwnProperty(item)) {
                delete propsCopy[item]

            }
        }
        return propsCopy
    }

    public static addId(props: any, existingId: any = "") {
        let id = {}
        if (props.id) {
            existingId += " " + props.id
            existingId = existingId.trim()
        }
        if (existingId !== "") {
            id = {id: existingId}
        }
        return id
    }

    public static addClassName(props: any, className = "") {
        if (props.className) {
            className += " " + props.className
            className = className.trim()
        }
        return className
    }

    public static getClass(klass: any, defaultValue: string = "") {
        return (klass ? klass : defaultValue)
    }

    public static concatClass(klass: string, newKlass: string) {
        return klass.trim() + " " + newKlass.trim()
    }

    public static concatAttr(attr: any, newAttr: any) {
        if (!attr) {
            attr = ""
        }
        if (!newAttr) {
            newAttr = ""
        }
        if (attr === "" && newAttr === "") {
            return ""
        }
        return (attr.trim() + " " + newAttr.trim()).trim()
    }

    public static getAndConcatClass(klass: any, newKlass: string) {
        let klassString = this.getClass(klass)
        return this.concatClass(klassString, newKlass)
    }

    public static randoId(length: any = 12, prefix: any = '') {
        let result = prefix;
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}