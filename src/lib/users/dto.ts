import { IsString, IsInt, IsOptional, Min, Max, IsEmail } from 'class-validator';

export class GetUserDTO {
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @IsOptional()
  name?: string;

  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto.' })
  @IsOptional()
  userName?: string;

  @IsString({ message: 'El apellido debe ser una cadena de texto.' })
  @IsOptional()
  lastName?: string;

  @IsEmail({}, { message: 'El correo electrónico debe ser un correo válido.' })
  @IsOptional()
  email?: string;

  @IsInt({ message: 'La edad debe ser un número entero.' })
  @Min(1, { message: 'La edad debe ser al menos 1.' })
  @Max(150, { message: 'La edad no puede ser mayor a 150.' })
  @IsOptional()
  age?: number;

  @IsString({ message: 'La ubicación debe ser una cadena de texto.' })
  @IsOptional()
  location?: string;

  @IsInt({ message: 'El ID debe ser un número entero.' })
  @Min(1, { message: 'El ID debe ser al menos 1.' })
  id: number;
}
