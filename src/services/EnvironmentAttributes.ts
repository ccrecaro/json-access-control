import { CURRENT_DATE, CURRENT_DATETIME, CURRENT_TIME } from "../constants/Attributes";

export class EnvironmentAttributes {
    public setEnvironmentDate(identifier: string) {
        const date: Date = new Date();

        switch(identifier) {
            case CURRENT_TIME: 
                return date.getTime();
            case CURRENT_DATE:
                return date.getDate();
            case CURRENT_DATETIME:
                return date;
        }
    }
}