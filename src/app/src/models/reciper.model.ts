//Reciper class
export class Reciper {

    private name: string;
    private desc: string;
    private href: string;
    private thumbnail: string;

    constructor(reciper) {
        this.name = reciper.title;
        this.desc = reciper.ingredients;
        this.href = reciper.href;
        this.thumbnail = reciper.thumbnail
    }
    get nameReciper(): string {
        return this.name;
    }
    get descReciper(): string {
        return this.desc;
    }
    get hrefReciper(): string {
        return this.href;
    }
    get thumbnailReciper(): string {
        return this.thumbnail;
    }
}