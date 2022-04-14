import { ZodSchema } from 'zod';

export class SchemaRegistry {
  public readonly schemas: {
    type: 'schema';
    schema: ZodSchema<unknown>;
  }[] = [];

  constructor() {}

  register<T extends ZodSchema<any>>(name: string, zodSchema: T) {
    const currentMetadata = zodSchema._def.openapi;
    const schemaWithMetadata = zodSchema.openapi({ ...currentMetadata, name });

    this.schemas.push({ type: 'schema', schema: schemaWithMetadata });

    return schemaWithMetadata;
  }
}
