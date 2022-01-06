import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class SharedService {
    constructor() { }
    alphabetsOnly(e: any) {
        var inp = String.fromCharCode(e.keyCode);
        if (/^[a-zA-Z ]*$/.test(inp)) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
    }
    numbersOnly(e: any) {
        var inp = String.fromCharCode(e.keyCode);
        if (/^[0-9]\d*$/.test(inp)) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
    }
}