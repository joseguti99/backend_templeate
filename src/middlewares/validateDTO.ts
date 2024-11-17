import { Request, Response, NextFunction } from 'express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export const validateDTO = (dto: any) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const allFieldsToValidate = [
      { data: req.body, field: 'body' },
      { data: req.params, field: 'params' },
      { data: req.query, field: 'query' },
      // { data: req.user, field: 'user' } // Opcional: Si tienes un `req.user`
    ];

    const allErrors: any[] = [];

    for (const { data, field } of allFieldsToValidate) {
      if (data) {
        const dtoObject = plainToClass(dto, data);

        const errors = await validate(dtoObject);
        if (errors.length > 0) {
          allErrors.push({
            field,
            errors: errors.map((err) => ({
              property: err.property,
              constraints: err.constraints
            }))
          });
        }
      }
    }

    if (allErrors.length > 0) {
      res.status(400).json({ errors: allErrors });
      return; 
    }

    next();
  };
};
