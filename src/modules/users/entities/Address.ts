
export class Address {
    _id: string;
    street: string;
    number: string;
    complement: string;
    zipcode: string;
    createdAt: Date;

    constructor(
        _id: string,
        street: string,
        number: string,
        complement: string,
        zipcode: string,
    ) {
        this._id = _id;
        this.street = street;
        this.number = number;
        this.complement = complement;
        this.zipcode = zipcode;
        this.createdAt = new Date();
    }
}