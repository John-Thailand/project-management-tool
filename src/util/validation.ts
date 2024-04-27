namespace App {
    //Validation
    export interface Validatable {
        value: string | number;
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        min?: number;
        max?: number;
    }

    export function validate(validatableInput: Validatable) {
        let isValid = true;
        // 空チェック
        if (validatableInput.required) {
            isValid = isValid && validatableInput.value.toString().trim().length !== 0;
        }
        // 最小文字数以上であるか
        if (validatableInput.minLength != null &&
            typeof validatableInput.value === 'string'
        ) {
            isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
        }
        // 最大文字数以下であるか
        if (validatableInput.maxLength != null &&
            typeof validatableInput.value === 'string'
        ) {
            isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
        }
        // 最小値以上であるか
        if (
            validatableInput.min != null &&
            typeof validatableInput.value === 'number'
        ) {
            isValid = isValid && validatableInput.value >= validatableInput.min;
        }
        // 最大値以上であるか
        if (
            validatableInput.max != null &&
            typeof validatableInput.value === 'number'
        ) {
            isValid = isValid && validatableInput.value <= validatableInput.max;
        }
        return isValid;
    }
}
