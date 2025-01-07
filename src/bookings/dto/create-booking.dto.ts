import {
  IsMongoId,
  IsNotEmpty,
  IsString,
  ValidationOptions,
  registerDecorator,
  ValidationArguments,
} from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsMongoId()
  hotel: string;

  // @IsNotEmpty()
  // @IsString()
  // duration: string;

  // @IsNotEmpty()
  // @IsString()
  // price: string;

  @IsNotEmpty()
  @IsString()
  @IsValidDateFormat({
    message: 'Enter date must be in MM/DD/YYYY format and valid.',
  })
  enter_date: string;

  @IsNotEmpty()
  @IsString()
  @IsValidDateFormat({
    message: 'Enter date must be in MM/DD/YYYY format and valid.',
  })
  @IsDateOlderThan('enter_date', {
    message: 'Exit date must be older than Enter date.',
  })
  exit_date: string;
}

// Validator to check if the date format is MM/DD/YYYY and is valid
export function IsValidDateFormat(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidDateFormat',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== 'string') return false;

          // Regex to match MM/DD/YYYY format
          const dateRegex =
            /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
          if (!dateRegex.test(value)) return false;

          // Check if the date is valid
          const [month, day, year] = value.split('/').map(Number);
          const date = new Date(year, month - 1, day);
          return (
            date.getFullYear() === year &&
            date.getMonth() === month - 1 &&
            date.getDate() === day
          );
        },
        defaultMessage(args: ValidationArguments) {
          return `${
            args.property
          } must be a valid date in the format MM/DD/YYYY and represent a real calendar date.`;
        },
      },
    });
  };
}

// Validator to ensure the exit date is earlier than the enter date
export function IsDateOlderThan(
  relatedProperty: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isDateOlderThan',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [relatedProperty],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          if (!value || !relatedValue) return false;

          // Parse dates
          const exitDate = new Date(value);
          const enterDate = new Date(relatedValue);
          // Ensure both dates are valid
          if (isNaN(exitDate.getTime()) || isNaN(enterDate.getTime())) {
            return false;
          }

          // Validate if exit_date is older than enter_date
          return exitDate > enterDate;
        },
        defaultMessage(args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          return `${args.property} must be older than ${relatedPropertyName}.`;
        },
      },
    });
  };
}
