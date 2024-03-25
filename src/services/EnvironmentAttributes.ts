import { CURRENT_DATE, CURRENT_DATETIME, CURRENT_TIME } from "../constants/Attributes";

export class EnvironmentAttributes {
    public setEnvironmentDate(identifier: string) {
        const date: Date = new Date();

        switch(identifier) {
            case CURRENT_TIME: 
                console.log(date.toTimeString());
                return date.getTime();
            case CURRENT_DATE:
                console.log(date.toDateString());
                return date.getDate();
            case CURRENT_DATETIME:
                console.log(date.toString());
                return date;
        }
    }
}