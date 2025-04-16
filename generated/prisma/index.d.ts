
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Alumno
 * 
 */
export type Alumno = $Result.DefaultSelection<Prisma.$AlumnoPayload>
/**
 * Model Clase
 * 
 */
export type Clase = $Result.DefaultSelection<Prisma.$ClasePayload>
/**
 * Model Asistencia
 * 
 */
export type Asistencia = $Result.DefaultSelection<Prisma.$AsistenciaPayload>
/**
 * Model UserDocente
 * 
 */
export type UserDocente = $Result.DefaultSelection<Prisma.$UserDocentePayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model Materia
 * 
 */
export type Materia = $Result.DefaultSelection<Prisma.$MateriaPayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Estado: {
  PRESENTE: 'PRESENTE',
  AUSENTE: 'AUSENTE',
  JUSTIFICADO: 'JUSTIFICADO'
};

export type Estado = (typeof Estado)[keyof typeof Estado]

}

export type Estado = $Enums.Estado

export const Estado: typeof $Enums.Estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alumnos
 * const alumnos = await prisma.alumno.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Alumnos
   * const alumnos = await prisma.alumno.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.alumno`: Exposes CRUD operations for the **Alumno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alumnos
    * const alumnos = await prisma.alumno.findMany()
    * ```
    */
  get alumno(): Prisma.AlumnoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clase`: Exposes CRUD operations for the **Clase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clases
    * const clases = await prisma.clase.findMany()
    * ```
    */
  get clase(): Prisma.ClaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asistencia`: Exposes CRUD operations for the **Asistencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistencias
    * const asistencias = await prisma.asistencia.findMany()
    * ```
    */
  get asistencia(): Prisma.AsistenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDocente`: Exposes CRUD operations for the **UserDocente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDocentes
    * const userDocentes = await prisma.userDocente.findMany()
    * ```
    */
  get userDocente(): Prisma.UserDocenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia`: Exposes CRUD operations for the **Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materia.findMany()
    * ```
    */
  get materia(): Prisma.MateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Alumno: 'Alumno',
    Clase: 'Clase',
    Asistencia: 'Asistencia',
    UserDocente: 'UserDocente',
    Roles: 'Roles',
    Materia: 'Materia',
    Curso: 'Curso'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "alumno" | "clase" | "asistencia" | "userDocente" | "roles" | "materia" | "curso"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Alumno: {
        payload: Prisma.$AlumnoPayload<ExtArgs>
        fields: Prisma.AlumnoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlumnoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlumnoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          findFirst: {
            args: Prisma.AlumnoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlumnoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          findMany: {
            args: Prisma.AlumnoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>[]
          }
          create: {
            args: Prisma.AlumnoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          createMany: {
            args: Prisma.AlumnoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlumnoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>[]
          }
          delete: {
            args: Prisma.AlumnoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          update: {
            args: Prisma.AlumnoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          deleteMany: {
            args: Prisma.AlumnoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlumnoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlumnoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>[]
          }
          upsert: {
            args: Prisma.AlumnoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoPayload>
          }
          aggregate: {
            args: Prisma.AlumnoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlumno>
          }
          groupBy: {
            args: Prisma.AlumnoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlumnoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlumnoCountArgs<ExtArgs>
            result: $Utils.Optional<AlumnoCountAggregateOutputType> | number
          }
        }
      }
      Clase: {
        payload: Prisma.$ClasePayload<ExtArgs>
        fields: Prisma.ClaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          findFirst: {
            args: Prisma.ClaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          findMany: {
            args: Prisma.ClaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>[]
          }
          create: {
            args: Prisma.ClaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          createMany: {
            args: Prisma.ClaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>[]
          }
          delete: {
            args: Prisma.ClaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          update: {
            args: Prisma.ClaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          deleteMany: {
            args: Prisma.ClaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>[]
          }
          upsert: {
            args: Prisma.ClaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          aggregate: {
            args: Prisma.ClaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClase>
          }
          groupBy: {
            args: Prisma.ClaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaseCountArgs<ExtArgs>
            result: $Utils.Optional<ClaseCountAggregateOutputType> | number
          }
        }
      }
      Asistencia: {
        payload: Prisma.$AsistenciaPayload<ExtArgs>
        fields: Prisma.AsistenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsistenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsistenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          findFirst: {
            args: Prisma.AsistenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsistenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          findMany: {
            args: Prisma.AsistenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          create: {
            args: Prisma.AsistenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          createMany: {
            args: Prisma.AsistenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsistenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          delete: {
            args: Prisma.AsistenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          update: {
            args: Prisma.AsistenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          deleteMany: {
            args: Prisma.AsistenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsistenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsistenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          upsert: {
            args: Prisma.AsistenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          aggregate: {
            args: Prisma.AsistenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsistencia>
          }
          groupBy: {
            args: Prisma.AsistenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsistenciaCountArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaCountAggregateOutputType> | number
          }
        }
      }
      UserDocente: {
        payload: Prisma.$UserDocentePayload<ExtArgs>
        fields: Prisma.UserDocenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDocenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDocenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocentePayload>
          }
          findFirst: {
            args: Prisma.UserDocenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDocenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocentePayload>
          }
          findMany: {
            args: Prisma.UserDocenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocentePayload>[]
          }
          create: {
            args: Prisma.UserDocenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocentePayload>
          }
          createMany: {
            args: Prisma.UserDocenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDocenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocentePayload>[]
          }
          delete: {
            args: Prisma.UserDocenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocentePayload>
          }
          update: {
            args: Prisma.UserDocenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocentePayload>
          }
          deleteMany: {
            args: Prisma.UserDocenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDocenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDocenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocentePayload>[]
          }
          upsert: {
            args: Prisma.UserDocenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDocentePayload>
          }
          aggregate: {
            args: Prisma.UserDocenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDocente>
          }
          groupBy: {
            args: Prisma.UserDocenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDocenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDocenteCountArgs<ExtArgs>
            result: $Utils.Optional<UserDocenteCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      Materia: {
        payload: Prisma.$MateriaPayload<ExtArgs>
        fields: Prisma.MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findFirst: {
            args: Prisma.MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findMany: {
            args: Prisma.MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          create: {
            args: Prisma.MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          createMany: {
            args: Prisma.MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          delete: {
            args: Prisma.MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          update: {
            args: Prisma.MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          deleteMany: {
            args: Prisma.MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          upsert: {
            args: Prisma.MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          aggregate: {
            args: Prisma.MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria>
          }
          groupBy: {
            args: Prisma.MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    alumno?: AlumnoOmit
    clase?: ClaseOmit
    asistencia?: AsistenciaOmit
    userDocente?: UserDocenteOmit
    roles?: RolesOmit
    materia?: MateriaOmit
    curso?: CursoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AlumnoCountOutputType
   */

  export type AlumnoCountOutputType = {
    Asistencia: number
    cursos: number
  }

  export type AlumnoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Asistencia?: boolean | AlumnoCountOutputTypeCountAsistenciaArgs
    cursos?: boolean | AlumnoCountOutputTypeCountCursosArgs
  }

  // Custom InputTypes
  /**
   * AlumnoCountOutputType without action
   */
  export type AlumnoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoCountOutputType
     */
    select?: AlumnoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlumnoCountOutputType without action
   */
  export type AlumnoCountOutputTypeCountAsistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
  }

  /**
   * AlumnoCountOutputType without action
   */
  export type AlumnoCountOutputTypeCountCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
  }


  /**
   * Count Type ClaseCountOutputType
   */

  export type ClaseCountOutputType = {
    Asistencia: number
  }

  export type ClaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Asistencia?: boolean | ClaseCountOutputTypeCountAsistenciaArgs
  }

  // Custom InputTypes
  /**
   * ClaseCountOutputType without action
   */
  export type ClaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseCountOutputType
     */
    select?: ClaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClaseCountOutputType without action
   */
  export type ClaseCountOutputTypeCountAsistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
  }


  /**
   * Count Type UserDocenteCountOutputType
   */

  export type UserDocenteCountOutputType = {
    Materia: number
  }

  export type UserDocenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materia?: boolean | UserDocenteCountOutputTypeCountMateriaArgs
  }

  // Custom InputTypes
  /**
   * UserDocenteCountOutputType without action
   */
  export type UserDocenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocenteCountOutputType
     */
    select?: UserDocenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserDocenteCountOutputType without action
   */
  export type UserDocenteCountOutputTypeCountMateriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    UserDocente: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserDocente?: boolean | RolesCountOutputTypeCountUserDocenteArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUserDocenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDocenteWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    Materia: number
    alumnos: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materia?: boolean | CursoCountOutputTypeCountMateriaArgs
    alumnos?: boolean | CursoCountOutputTypeCountAlumnosArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountMateriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountAlumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Alumno
   */

  export type AggregateAlumno = {
    _count: AlumnoCountAggregateOutputType | null
    _avg: AlumnoAvgAggregateOutputType | null
    _sum: AlumnoSumAggregateOutputType | null
    _min: AlumnoMinAggregateOutputType | null
    _max: AlumnoMaxAggregateOutputType | null
  }

  export type AlumnoAvgAggregateOutputType = {
    id: number | null
  }

  export type AlumnoSumAggregateOutputType = {
    id: number | null
  }

  export type AlumnoMinAggregateOutputType = {
    id: number | null
    legajo: string | null
    nombre: string | null
    apellido: string | null
    celular: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AlumnoMaxAggregateOutputType = {
    id: number | null
    legajo: string | null
    nombre: string | null
    apellido: string | null
    celular: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AlumnoCountAggregateOutputType = {
    id: number
    legajo: number
    nombre: number
    apellido: number
    celular: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AlumnoAvgAggregateInputType = {
    id?: true
  }

  export type AlumnoSumAggregateInputType = {
    id?: true
  }

  export type AlumnoMinAggregateInputType = {
    id?: true
    legajo?: true
    nombre?: true
    apellido?: true
    celular?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AlumnoMaxAggregateInputType = {
    id?: true
    legajo?: true
    nombre?: true
    apellido?: true
    celular?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AlumnoCountAggregateInputType = {
    id?: true
    legajo?: true
    nombre?: true
    apellido?: true
    celular?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AlumnoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alumno to aggregate.
     */
    where?: AlumnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlumnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alumnos
    **/
    _count?: true | AlumnoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlumnoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlumnoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlumnoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlumnoMaxAggregateInputType
  }

  export type GetAlumnoAggregateType<T extends AlumnoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumno[P]>
      : GetScalarType<T[P], AggregateAlumno[P]>
  }




  export type AlumnoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoWhereInput
    orderBy?: AlumnoOrderByWithAggregationInput | AlumnoOrderByWithAggregationInput[]
    by: AlumnoScalarFieldEnum[] | AlumnoScalarFieldEnum
    having?: AlumnoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlumnoCountAggregateInputType | true
    _avg?: AlumnoAvgAggregateInputType
    _sum?: AlumnoSumAggregateInputType
    _min?: AlumnoMinAggregateInputType
    _max?: AlumnoMaxAggregateInputType
  }

  export type AlumnoGroupByOutputType = {
    id: number
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: AlumnoCountAggregateOutputType | null
    _avg: AlumnoAvgAggregateOutputType | null
    _sum: AlumnoSumAggregateOutputType | null
    _min: AlumnoMinAggregateOutputType | null
    _max: AlumnoMaxAggregateOutputType | null
  }

  type GetAlumnoGroupByPayload<T extends AlumnoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlumnoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlumnoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlumnoGroupByOutputType[P]>
            : GetScalarType<T[P], AlumnoGroupByOutputType[P]>
        }
      >
    >


  export type AlumnoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajo?: boolean
    nombre?: boolean
    apellido?: boolean
    celular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Asistencia?: boolean | Alumno$AsistenciaArgs<ExtArgs>
    cursos?: boolean | Alumno$cursosArgs<ExtArgs>
    _count?: boolean | AlumnoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumno"]>

  export type AlumnoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajo?: boolean
    nombre?: boolean
    apellido?: boolean
    celular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["alumno"]>

  export type AlumnoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajo?: boolean
    nombre?: boolean
    apellido?: boolean
    celular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["alumno"]>

  export type AlumnoSelectScalar = {
    id?: boolean
    legajo?: boolean
    nombre?: boolean
    apellido?: boolean
    celular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AlumnoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "legajo" | "nombre" | "apellido" | "celular" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["alumno"]>
  export type AlumnoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Asistencia?: boolean | Alumno$AsistenciaArgs<ExtArgs>
    cursos?: boolean | Alumno$cursosArgs<ExtArgs>
    _count?: boolean | AlumnoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlumnoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlumnoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlumnoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alumno"
    objects: {
      Asistencia: Prisma.$AsistenciaPayload<ExtArgs>[]
      cursos: Prisma.$CursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      legajo: string
      nombre: string
      apellido: string
      celular: string
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["alumno"]>
    composites: {}
  }

  type AlumnoGetPayload<S extends boolean | null | undefined | AlumnoDefaultArgs> = $Result.GetResult<Prisma.$AlumnoPayload, S>

  type AlumnoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlumnoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlumnoCountAggregateInputType | true
    }

  export interface AlumnoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alumno'], meta: { name: 'Alumno' } }
    /**
     * Find zero or one Alumno that matches the filter.
     * @param {AlumnoFindUniqueArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlumnoFindUniqueArgs>(args: SelectSubset<T, AlumnoFindUniqueArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alumno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlumnoFindUniqueOrThrowArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlumnoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlumnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alumno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoFindFirstArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlumnoFindFirstArgs>(args?: SelectSubset<T, AlumnoFindFirstArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alumno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoFindFirstOrThrowArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlumnoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlumnoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alumnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumnos
     * const alumnos = await prisma.alumno.findMany()
     * 
     * // Get first 10 Alumnos
     * const alumnos = await prisma.alumno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alumnoWithIdOnly = await prisma.alumno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlumnoFindManyArgs>(args?: SelectSubset<T, AlumnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alumno.
     * @param {AlumnoCreateArgs} args - Arguments to create a Alumno.
     * @example
     * // Create one Alumno
     * const Alumno = await prisma.alumno.create({
     *   data: {
     *     // ... data to create a Alumno
     *   }
     * })
     * 
     */
    create<T extends AlumnoCreateArgs>(args: SelectSubset<T, AlumnoCreateArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alumnos.
     * @param {AlumnoCreateManyArgs} args - Arguments to create many Alumnos.
     * @example
     * // Create many Alumnos
     * const alumno = await prisma.alumno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlumnoCreateManyArgs>(args?: SelectSubset<T, AlumnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alumnos and returns the data saved in the database.
     * @param {AlumnoCreateManyAndReturnArgs} args - Arguments to create many Alumnos.
     * @example
     * // Create many Alumnos
     * const alumno = await prisma.alumno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alumnos and only return the `id`
     * const alumnoWithIdOnly = await prisma.alumno.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlumnoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlumnoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alumno.
     * @param {AlumnoDeleteArgs} args - Arguments to delete one Alumno.
     * @example
     * // Delete one Alumno
     * const Alumno = await prisma.alumno.delete({
     *   where: {
     *     // ... filter to delete one Alumno
     *   }
     * })
     * 
     */
    delete<T extends AlumnoDeleteArgs>(args: SelectSubset<T, AlumnoDeleteArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alumno.
     * @param {AlumnoUpdateArgs} args - Arguments to update one Alumno.
     * @example
     * // Update one Alumno
     * const alumno = await prisma.alumno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlumnoUpdateArgs>(args: SelectSubset<T, AlumnoUpdateArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alumnos.
     * @param {AlumnoDeleteManyArgs} args - Arguments to filter Alumnos to delete.
     * @example
     * // Delete a few Alumnos
     * const { count } = await prisma.alumno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlumnoDeleteManyArgs>(args?: SelectSubset<T, AlumnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumnos
     * const alumno = await prisma.alumno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlumnoUpdateManyArgs>(args: SelectSubset<T, AlumnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumnos and returns the data updated in the database.
     * @param {AlumnoUpdateManyAndReturnArgs} args - Arguments to update many Alumnos.
     * @example
     * // Update many Alumnos
     * const alumno = await prisma.alumno.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alumnos and only return the `id`
     * const alumnoWithIdOnly = await prisma.alumno.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlumnoUpdateManyAndReturnArgs>(args: SelectSubset<T, AlumnoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alumno.
     * @param {AlumnoUpsertArgs} args - Arguments to update or create a Alumno.
     * @example
     * // Update or create a Alumno
     * const alumno = await prisma.alumno.upsert({
     *   create: {
     *     // ... data to create a Alumno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumno we want to update
     *   }
     * })
     */
    upsert<T extends AlumnoUpsertArgs>(args: SelectSubset<T, AlumnoUpsertArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoCountArgs} args - Arguments to filter Alumnos to count.
     * @example
     * // Count the number of Alumnos
     * const count = await prisma.alumno.count({
     *   where: {
     *     // ... the filter for the Alumnos we want to count
     *   }
     * })
    **/
    count<T extends AlumnoCountArgs>(
      args?: Subset<T, AlumnoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlumnoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alumno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlumnoAggregateArgs>(args: Subset<T, AlumnoAggregateArgs>): Prisma.PrismaPromise<GetAlumnoAggregateType<T>>

    /**
     * Group by Alumno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlumnoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlumnoGroupByArgs['orderBy'] }
        : { orderBy?: AlumnoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlumnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alumno model
   */
  readonly fields: AlumnoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alumno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlumnoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Asistencia<T extends Alumno$AsistenciaArgs<ExtArgs> = {}>(args?: Subset<T, Alumno$AsistenciaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cursos<T extends Alumno$cursosArgs<ExtArgs> = {}>(args?: Subset<T, Alumno$cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alumno model
   */
  interface AlumnoFieldRefs {
    readonly id: FieldRef<"Alumno", 'Int'>
    readonly legajo: FieldRef<"Alumno", 'String'>
    readonly nombre: FieldRef<"Alumno", 'String'>
    readonly apellido: FieldRef<"Alumno", 'String'>
    readonly celular: FieldRef<"Alumno", 'String'>
    readonly createdAt: FieldRef<"Alumno", 'DateTime'>
    readonly updatedAt: FieldRef<"Alumno", 'DateTime'>
    readonly deletedAt: FieldRef<"Alumno", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alumno findUnique
   */
  export type AlumnoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumno to fetch.
     */
    where: AlumnoWhereUniqueInput
  }

  /**
   * Alumno findUniqueOrThrow
   */
  export type AlumnoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumno to fetch.
     */
    where: AlumnoWhereUniqueInput
  }

  /**
   * Alumno findFirst
   */
  export type AlumnoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumno to fetch.
     */
    where?: AlumnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alumnos.
     */
    cursor?: AlumnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alumnos.
     */
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }

  /**
   * Alumno findFirstOrThrow
   */
  export type AlumnoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumno to fetch.
     */
    where?: AlumnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alumnos.
     */
    cursor?: AlumnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alumnos.
     */
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }

  /**
   * Alumno findMany
   */
  export type AlumnoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where?: AlumnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alumnos.
     */
    cursor?: AlumnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }

  /**
   * Alumno create
   */
  export type AlumnoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * The data needed to create a Alumno.
     */
    data: XOR<AlumnoCreateInput, AlumnoUncheckedCreateInput>
  }

  /**
   * Alumno createMany
   */
  export type AlumnoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alumnos.
     */
    data: AlumnoCreateManyInput | AlumnoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alumno createManyAndReturn
   */
  export type AlumnoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * The data used to create many Alumnos.
     */
    data: AlumnoCreateManyInput | AlumnoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alumno update
   */
  export type AlumnoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * The data needed to update a Alumno.
     */
    data: XOR<AlumnoUpdateInput, AlumnoUncheckedUpdateInput>
    /**
     * Choose, which Alumno to update.
     */
    where: AlumnoWhereUniqueInput
  }

  /**
   * Alumno updateMany
   */
  export type AlumnoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alumnos.
     */
    data: XOR<AlumnoUpdateManyMutationInput, AlumnoUncheckedUpdateManyInput>
    /**
     * Filter which Alumnos to update
     */
    where?: AlumnoWhereInput
    /**
     * Limit how many Alumnos to update.
     */
    limit?: number
  }

  /**
   * Alumno updateManyAndReturn
   */
  export type AlumnoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * The data used to update Alumnos.
     */
    data: XOR<AlumnoUpdateManyMutationInput, AlumnoUncheckedUpdateManyInput>
    /**
     * Filter which Alumnos to update
     */
    where?: AlumnoWhereInput
    /**
     * Limit how many Alumnos to update.
     */
    limit?: number
  }

  /**
   * Alumno upsert
   */
  export type AlumnoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * The filter to search for the Alumno to update in case it exists.
     */
    where: AlumnoWhereUniqueInput
    /**
     * In case the Alumno found by the `where` argument doesn't exist, create a new Alumno with this data.
     */
    create: XOR<AlumnoCreateInput, AlumnoUncheckedCreateInput>
    /**
     * In case the Alumno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlumnoUpdateInput, AlumnoUncheckedUpdateInput>
  }

  /**
   * Alumno delete
   */
  export type AlumnoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    /**
     * Filter which Alumno to delete.
     */
    where: AlumnoWhereUniqueInput
  }

  /**
   * Alumno deleteMany
   */
  export type AlumnoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alumnos to delete
     */
    where?: AlumnoWhereInput
    /**
     * Limit how many Alumnos to delete.
     */
    limit?: number
  }

  /**
   * Alumno.Asistencia
   */
  export type Alumno$AsistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    cursor?: AsistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Alumno.cursos
   */
  export type Alumno$cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    cursor?: CursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Alumno without action
   */
  export type AlumnoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
  }


  /**
   * Model Clase
   */

  export type AggregateClase = {
    _count: ClaseCountAggregateOutputType | null
    _avg: ClaseAvgAggregateOutputType | null
    _sum: ClaseSumAggregateOutputType | null
    _min: ClaseMinAggregateOutputType | null
    _max: ClaseMaxAggregateOutputType | null
  }

  export type ClaseAvgAggregateOutputType = {
    id: number | null
    idMateria: number | null
  }

  export type ClaseSumAggregateOutputType = {
    id: number | null
    idMateria: number | null
  }

  export type ClaseMinAggregateOutputType = {
    id: number | null
    fechaHora: Date | null
    idMateria: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ClaseMaxAggregateOutputType = {
    id: number | null
    fechaHora: Date | null
    idMateria: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ClaseCountAggregateOutputType = {
    id: number
    fechaHora: number
    idMateria: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ClaseAvgAggregateInputType = {
    id?: true
    idMateria?: true
  }

  export type ClaseSumAggregateInputType = {
    id?: true
    idMateria?: true
  }

  export type ClaseMinAggregateInputType = {
    id?: true
    fechaHora?: true
    idMateria?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ClaseMaxAggregateInputType = {
    id?: true
    fechaHora?: true
    idMateria?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ClaseCountAggregateInputType = {
    id?: true
    fechaHora?: true
    idMateria?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ClaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clase to aggregate.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clases
    **/
    _count?: true | ClaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaseMaxAggregateInputType
  }

  export type GetClaseAggregateType<T extends ClaseAggregateArgs> = {
        [P in keyof T & keyof AggregateClase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClase[P]>
      : GetScalarType<T[P], AggregateClase[P]>
  }




  export type ClaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaseWhereInput
    orderBy?: ClaseOrderByWithAggregationInput | ClaseOrderByWithAggregationInput[]
    by: ClaseScalarFieldEnum[] | ClaseScalarFieldEnum
    having?: ClaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaseCountAggregateInputType | true
    _avg?: ClaseAvgAggregateInputType
    _sum?: ClaseSumAggregateInputType
    _min?: ClaseMinAggregateInputType
    _max?: ClaseMaxAggregateInputType
  }

  export type ClaseGroupByOutputType = {
    id: number
    fechaHora: Date
    idMateria: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: ClaseCountAggregateOutputType | null
    _avg: ClaseAvgAggregateOutputType | null
    _sum: ClaseSumAggregateOutputType | null
    _min: ClaseMinAggregateOutputType | null
    _max: ClaseMaxAggregateOutputType | null
  }

  type GetClaseGroupByPayload<T extends ClaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaseGroupByOutputType[P]>
            : GetScalarType<T[P], ClaseGroupByOutputType[P]>
        }
      >
    >


  export type ClaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaHora?: boolean
    idMateria?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Asistencia?: boolean | Clase$AsistenciaArgs<ExtArgs>
    _count?: boolean | ClaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clase"]>

  export type ClaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaHora?: boolean
    idMateria?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["clase"]>

  export type ClaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaHora?: boolean
    idMateria?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["clase"]>

  export type ClaseSelectScalar = {
    id?: boolean
    fechaHora?: boolean
    idMateria?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ClaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaHora" | "idMateria" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["clase"]>
  export type ClaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Asistencia?: boolean | Clase$AsistenciaArgs<ExtArgs>
    _count?: boolean | ClaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clase"
    objects: {
      Asistencia: Prisma.$AsistenciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaHora: Date
      idMateria: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["clase"]>
    composites: {}
  }

  type ClaseGetPayload<S extends boolean | null | undefined | ClaseDefaultArgs> = $Result.GetResult<Prisma.$ClasePayload, S>

  type ClaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClaseCountAggregateInputType | true
    }

  export interface ClaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clase'], meta: { name: 'Clase' } }
    /**
     * Find zero or one Clase that matches the filter.
     * @param {ClaseFindUniqueArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaseFindUniqueArgs>(args: SelectSubset<T, ClaseFindUniqueArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaseFindUniqueOrThrowArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseFindFirstArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaseFindFirstArgs>(args?: SelectSubset<T, ClaseFindFirstArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseFindFirstOrThrowArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clases
     * const clases = await prisma.clase.findMany()
     * 
     * // Get first 10 Clases
     * const clases = await prisma.clase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claseWithIdOnly = await prisma.clase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaseFindManyArgs>(args?: SelectSubset<T, ClaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clase.
     * @param {ClaseCreateArgs} args - Arguments to create a Clase.
     * @example
     * // Create one Clase
     * const Clase = await prisma.clase.create({
     *   data: {
     *     // ... data to create a Clase
     *   }
     * })
     * 
     */
    create<T extends ClaseCreateArgs>(args: SelectSubset<T, ClaseCreateArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clases.
     * @param {ClaseCreateManyArgs} args - Arguments to create many Clases.
     * @example
     * // Create many Clases
     * const clase = await prisma.clase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaseCreateManyArgs>(args?: SelectSubset<T, ClaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clases and returns the data saved in the database.
     * @param {ClaseCreateManyAndReturnArgs} args - Arguments to create many Clases.
     * @example
     * // Create many Clases
     * const clase = await prisma.clase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clases and only return the `id`
     * const claseWithIdOnly = await prisma.clase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clase.
     * @param {ClaseDeleteArgs} args - Arguments to delete one Clase.
     * @example
     * // Delete one Clase
     * const Clase = await prisma.clase.delete({
     *   where: {
     *     // ... filter to delete one Clase
     *   }
     * })
     * 
     */
    delete<T extends ClaseDeleteArgs>(args: SelectSubset<T, ClaseDeleteArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clase.
     * @param {ClaseUpdateArgs} args - Arguments to update one Clase.
     * @example
     * // Update one Clase
     * const clase = await prisma.clase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaseUpdateArgs>(args: SelectSubset<T, ClaseUpdateArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clases.
     * @param {ClaseDeleteManyArgs} args - Arguments to filter Clases to delete.
     * @example
     * // Delete a few Clases
     * const { count } = await prisma.clase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaseDeleteManyArgs>(args?: SelectSubset<T, ClaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clases
     * const clase = await prisma.clase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaseUpdateManyArgs>(args: SelectSubset<T, ClaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clases and returns the data updated in the database.
     * @param {ClaseUpdateManyAndReturnArgs} args - Arguments to update many Clases.
     * @example
     * // Update many Clases
     * const clase = await prisma.clase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clases and only return the `id`
     * const claseWithIdOnly = await prisma.clase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ClaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clase.
     * @param {ClaseUpsertArgs} args - Arguments to update or create a Clase.
     * @example
     * // Update or create a Clase
     * const clase = await prisma.clase.upsert({
     *   create: {
     *     // ... data to create a Clase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clase we want to update
     *   }
     * })
     */
    upsert<T extends ClaseUpsertArgs>(args: SelectSubset<T, ClaseUpsertArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseCountArgs} args - Arguments to filter Clases to count.
     * @example
     * // Count the number of Clases
     * const count = await prisma.clase.count({
     *   where: {
     *     // ... the filter for the Clases we want to count
     *   }
     * })
    **/
    count<T extends ClaseCountArgs>(
      args?: Subset<T, ClaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClaseAggregateArgs>(args: Subset<T, ClaseAggregateArgs>): Prisma.PrismaPromise<GetClaseAggregateType<T>>

    /**
     * Group by Clase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaseGroupByArgs['orderBy'] }
        : { orderBy?: ClaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clase model
   */
  readonly fields: ClaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Asistencia<T extends Clase$AsistenciaArgs<ExtArgs> = {}>(args?: Subset<T, Clase$AsistenciaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clase model
   */
  interface ClaseFieldRefs {
    readonly id: FieldRef<"Clase", 'Int'>
    readonly fechaHora: FieldRef<"Clase", 'DateTime'>
    readonly idMateria: FieldRef<"Clase", 'Int'>
    readonly createdAt: FieldRef<"Clase", 'DateTime'>
    readonly updatedAt: FieldRef<"Clase", 'DateTime'>
    readonly deletedAt: FieldRef<"Clase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clase findUnique
   */
  export type ClaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where: ClaseWhereUniqueInput
  }

  /**
   * Clase findUniqueOrThrow
   */
  export type ClaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where: ClaseWhereUniqueInput
  }

  /**
   * Clase findFirst
   */
  export type ClaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clases.
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clases.
     */
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }

  /**
   * Clase findFirstOrThrow
   */
  export type ClaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clases.
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clases.
     */
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }

  /**
   * Clase findMany
   */
  export type ClaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clases.
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }

  /**
   * Clase create
   */
  export type ClaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Clase.
     */
    data: XOR<ClaseCreateInput, ClaseUncheckedCreateInput>
  }

  /**
   * Clase createMany
   */
  export type ClaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clases.
     */
    data: ClaseCreateManyInput | ClaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clase createManyAndReturn
   */
  export type ClaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * The data used to create many Clases.
     */
    data: ClaseCreateManyInput | ClaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clase update
   */
  export type ClaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Clase.
     */
    data: XOR<ClaseUpdateInput, ClaseUncheckedUpdateInput>
    /**
     * Choose, which Clase to update.
     */
    where: ClaseWhereUniqueInput
  }

  /**
   * Clase updateMany
   */
  export type ClaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clases.
     */
    data: XOR<ClaseUpdateManyMutationInput, ClaseUncheckedUpdateManyInput>
    /**
     * Filter which Clases to update
     */
    where?: ClaseWhereInput
    /**
     * Limit how many Clases to update.
     */
    limit?: number
  }

  /**
   * Clase updateManyAndReturn
   */
  export type ClaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * The data used to update Clases.
     */
    data: XOR<ClaseUpdateManyMutationInput, ClaseUncheckedUpdateManyInput>
    /**
     * Filter which Clases to update
     */
    where?: ClaseWhereInput
    /**
     * Limit how many Clases to update.
     */
    limit?: number
  }

  /**
   * Clase upsert
   */
  export type ClaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Clase to update in case it exists.
     */
    where: ClaseWhereUniqueInput
    /**
     * In case the Clase found by the `where` argument doesn't exist, create a new Clase with this data.
     */
    create: XOR<ClaseCreateInput, ClaseUncheckedCreateInput>
    /**
     * In case the Clase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaseUpdateInput, ClaseUncheckedUpdateInput>
  }

  /**
   * Clase delete
   */
  export type ClaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter which Clase to delete.
     */
    where: ClaseWhereUniqueInput
  }

  /**
   * Clase deleteMany
   */
  export type ClaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clases to delete
     */
    where?: ClaseWhereInput
    /**
     * Limit how many Clases to delete.
     */
    limit?: number
  }

  /**
   * Clase.Asistencia
   */
  export type Clase$AsistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    cursor?: AsistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Clase without action
   */
  export type ClaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
  }


  /**
   * Model Asistencia
   */

  export type AggregateAsistencia = {
    _count: AsistenciaCountAggregateOutputType | null
    _avg: AsistenciaAvgAggregateOutputType | null
    _sum: AsistenciaSumAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  export type AsistenciaAvgAggregateOutputType = {
    id: number | null
    idAlumno: number | null
    idClase: number | null
  }

  export type AsistenciaSumAggregateOutputType = {
    id: number | null
    idAlumno: number | null
    idClase: number | null
  }

  export type AsistenciaMinAggregateOutputType = {
    id: number | null
    idAlumno: number | null
    idClase: number | null
    estado: $Enums.Estado | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsistenciaMaxAggregateOutputType = {
    id: number | null
    idAlumno: number | null
    idClase: number | null
    estado: $Enums.Estado | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsistenciaCountAggregateOutputType = {
    id: number
    idAlumno: number
    idClase: number
    estado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AsistenciaAvgAggregateInputType = {
    id?: true
    idAlumno?: true
    idClase?: true
  }

  export type AsistenciaSumAggregateInputType = {
    id?: true
    idAlumno?: true
    idClase?: true
  }

  export type AsistenciaMinAggregateInputType = {
    id?: true
    idAlumno?: true
    idClase?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsistenciaMaxAggregateInputType = {
    id?: true
    idAlumno?: true
    idClase?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsistenciaCountAggregateInputType = {
    id?: true
    idAlumno?: true
    idClase?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AsistenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asistencia to aggregate.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asistencias
    **/
    _count?: true | AsistenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsistenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsistenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsistenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsistenciaMaxAggregateInputType
  }

  export type GetAsistenciaAggregateType<T extends AsistenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistencia[P]>
      : GetScalarType<T[P], AggregateAsistencia[P]>
  }




  export type AsistenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithAggregationInput | AsistenciaOrderByWithAggregationInput[]
    by: AsistenciaScalarFieldEnum[] | AsistenciaScalarFieldEnum
    having?: AsistenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsistenciaCountAggregateInputType | true
    _avg?: AsistenciaAvgAggregateInputType
    _sum?: AsistenciaSumAggregateInputType
    _min?: AsistenciaMinAggregateInputType
    _max?: AsistenciaMaxAggregateInputType
  }

  export type AsistenciaGroupByOutputType = {
    id: number
    idAlumno: number
    idClase: number
    estado: $Enums.Estado
    createdAt: Date
    updatedAt: Date | null
    _count: AsistenciaCountAggregateOutputType | null
    _avg: AsistenciaAvgAggregateOutputType | null
    _sum: AsistenciaSumAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  type GetAsistenciaGroupByPayload<T extends AsistenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsistenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsistenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
            : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
        }
      >
    >


  export type AsistenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAlumno?: boolean
    idClase?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alumno?: boolean | AlumnoDefaultArgs<ExtArgs>
    clase?: boolean | ClaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAlumno?: boolean
    idClase?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alumno?: boolean | AlumnoDefaultArgs<ExtArgs>
    clase?: boolean | ClaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAlumno?: boolean
    idClase?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alumno?: boolean | AlumnoDefaultArgs<ExtArgs>
    clase?: boolean | ClaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectScalar = {
    id?: boolean
    idAlumno?: boolean
    idClase?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AsistenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idAlumno" | "idClase" | "estado" | "createdAt" | "updatedAt", ExtArgs["result"]["asistencia"]>
  export type AsistenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | AlumnoDefaultArgs<ExtArgs>
    clase?: boolean | ClaseDefaultArgs<ExtArgs>
  }
  export type AsistenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | AlumnoDefaultArgs<ExtArgs>
    clase?: boolean | ClaseDefaultArgs<ExtArgs>
  }
  export type AsistenciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | AlumnoDefaultArgs<ExtArgs>
    clase?: boolean | ClaseDefaultArgs<ExtArgs>
  }

  export type $AsistenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asistencia"
    objects: {
      alumno: Prisma.$AlumnoPayload<ExtArgs>
      clase: Prisma.$ClasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idAlumno: number
      idClase: number
      estado: $Enums.Estado
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["asistencia"]>
    composites: {}
  }

  type AsistenciaGetPayload<S extends boolean | null | undefined | AsistenciaDefaultArgs> = $Result.GetResult<Prisma.$AsistenciaPayload, S>

  type AsistenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsistenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsistenciaCountAggregateInputType | true
    }

  export interface AsistenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asistencia'], meta: { name: 'Asistencia' } }
    /**
     * Find zero or one Asistencia that matches the filter.
     * @param {AsistenciaFindUniqueArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsistenciaFindUniqueArgs>(args: SelectSubset<T, AsistenciaFindUniqueArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asistencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsistenciaFindUniqueOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsistenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, AsistenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindFirstArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsistenciaFindFirstArgs>(args?: SelectSubset<T, AsistenciaFindFirstArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindFirstOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsistenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, AsistenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistencias
     * const asistencias = await prisma.asistencia.findMany()
     * 
     * // Get first 10 Asistencias
     * const asistencias = await prisma.asistencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsistenciaFindManyArgs>(args?: SelectSubset<T, AsistenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asistencia.
     * @param {AsistenciaCreateArgs} args - Arguments to create a Asistencia.
     * @example
     * // Create one Asistencia
     * const Asistencia = await prisma.asistencia.create({
     *   data: {
     *     // ... data to create a Asistencia
     *   }
     * })
     * 
     */
    create<T extends AsistenciaCreateArgs>(args: SelectSubset<T, AsistenciaCreateArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asistencias.
     * @param {AsistenciaCreateManyArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsistenciaCreateManyArgs>(args?: SelectSubset<T, AsistenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asistencias and returns the data saved in the database.
     * @param {AsistenciaCreateManyAndReturnArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asistencias and only return the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsistenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, AsistenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asistencia.
     * @param {AsistenciaDeleteArgs} args - Arguments to delete one Asistencia.
     * @example
     * // Delete one Asistencia
     * const Asistencia = await prisma.asistencia.delete({
     *   where: {
     *     // ... filter to delete one Asistencia
     *   }
     * })
     * 
     */
    delete<T extends AsistenciaDeleteArgs>(args: SelectSubset<T, AsistenciaDeleteArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asistencia.
     * @param {AsistenciaUpdateArgs} args - Arguments to update one Asistencia.
     * @example
     * // Update one Asistencia
     * const asistencia = await prisma.asistencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsistenciaUpdateArgs>(args: SelectSubset<T, AsistenciaUpdateArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asistencias.
     * @param {AsistenciaDeleteManyArgs} args - Arguments to filter Asistencias to delete.
     * @example
     * // Delete a few Asistencias
     * const { count } = await prisma.asistencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsistenciaDeleteManyArgs>(args?: SelectSubset<T, AsistenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsistenciaUpdateManyArgs>(args: SelectSubset<T, AsistenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias and returns the data updated in the database.
     * @param {AsistenciaUpdateManyAndReturnArgs} args - Arguments to update many Asistencias.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Asistencias and only return the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AsistenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, AsistenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asistencia.
     * @param {AsistenciaUpsertArgs} args - Arguments to update or create a Asistencia.
     * @example
     * // Update or create a Asistencia
     * const asistencia = await prisma.asistencia.upsert({
     *   create: {
     *     // ... data to create a Asistencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistencia we want to update
     *   }
     * })
     */
    upsert<T extends AsistenciaUpsertArgs>(args: SelectSubset<T, AsistenciaUpsertArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaCountArgs} args - Arguments to filter Asistencias to count.
     * @example
     * // Count the number of Asistencias
     * const count = await prisma.asistencia.count({
     *   where: {
     *     // ... the filter for the Asistencias we want to count
     *   }
     * })
    **/
    count<T extends AsistenciaCountArgs>(
      args?: Subset<T, AsistenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsistenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsistenciaAggregateArgs>(args: Subset<T, AsistenciaAggregateArgs>): Prisma.PrismaPromise<GetAsistenciaAggregateType<T>>

    /**
     * Group by Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsistenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsistenciaGroupByArgs['orderBy'] }
        : { orderBy?: AsistenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsistenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asistencia model
   */
  readonly fields: AsistenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asistencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsistenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alumno<T extends AlumnoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlumnoDefaultArgs<ExtArgs>>): Prisma__AlumnoClient<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clase<T extends ClaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClaseDefaultArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asistencia model
   */
  interface AsistenciaFieldRefs {
    readonly id: FieldRef<"Asistencia", 'Int'>
    readonly idAlumno: FieldRef<"Asistencia", 'Int'>
    readonly idClase: FieldRef<"Asistencia", 'Int'>
    readonly estado: FieldRef<"Asistencia", 'Estado'>
    readonly createdAt: FieldRef<"Asistencia", 'DateTime'>
    readonly updatedAt: FieldRef<"Asistencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asistencia findUnique
   */
  export type AsistenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia findUniqueOrThrow
   */
  export type AsistenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia findFirst
   */
  export type AsistenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asistencia findFirstOrThrow
   */
  export type AsistenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asistencia findMany
   */
  export type AsistenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencias to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asistencia create
   */
  export type AsistenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Asistencia.
     */
    data: XOR<AsistenciaCreateInput, AsistenciaUncheckedCreateInput>
  }

  /**
   * Asistencia createMany
   */
  export type AsistenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asistencias.
     */
    data: AsistenciaCreateManyInput | AsistenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asistencia createManyAndReturn
   */
  export type AsistenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * The data used to create many Asistencias.
     */
    data: AsistenciaCreateManyInput | AsistenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asistencia update
   */
  export type AsistenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Asistencia.
     */
    data: XOR<AsistenciaUpdateInput, AsistenciaUncheckedUpdateInput>
    /**
     * Choose, which Asistencia to update.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia updateMany
   */
  export type AsistenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asistencias.
     */
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyInput>
    /**
     * Filter which Asistencias to update
     */
    where?: AsistenciaWhereInput
    /**
     * Limit how many Asistencias to update.
     */
    limit?: number
  }

  /**
   * Asistencia updateManyAndReturn
   */
  export type AsistenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * The data used to update Asistencias.
     */
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyInput>
    /**
     * Filter which Asistencias to update
     */
    where?: AsistenciaWhereInput
    /**
     * Limit how many Asistencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asistencia upsert
   */
  export type AsistenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Asistencia to update in case it exists.
     */
    where: AsistenciaWhereUniqueInput
    /**
     * In case the Asistencia found by the `where` argument doesn't exist, create a new Asistencia with this data.
     */
    create: XOR<AsistenciaCreateInput, AsistenciaUncheckedCreateInput>
    /**
     * In case the Asistencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsistenciaUpdateInput, AsistenciaUncheckedUpdateInput>
  }

  /**
   * Asistencia delete
   */
  export type AsistenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter which Asistencia to delete.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia deleteMany
   */
  export type AsistenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asistencias to delete
     */
    where?: AsistenciaWhereInput
    /**
     * Limit how many Asistencias to delete.
     */
    limit?: number
  }

  /**
   * Asistencia without action
   */
  export type AsistenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
  }


  /**
   * Model UserDocente
   */

  export type AggregateUserDocente = {
    _count: UserDocenteCountAggregateOutputType | null
    _avg: UserDocenteAvgAggregateOutputType | null
    _sum: UserDocenteSumAggregateOutputType | null
    _min: UserDocenteMinAggregateOutputType | null
    _max: UserDocenteMaxAggregateOutputType | null
  }

  export type UserDocenteAvgAggregateOutputType = {
    id: number | null
    idRol: number | null
  }

  export type UserDocenteSumAggregateOutputType = {
    id: number | null
    idRol: number | null
  }

  export type UserDocenteMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nombre: string | null
    apellido: string | null
    idRol: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserDocenteMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nombre: string | null
    apellido: string | null
    idRol: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserDocenteCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nombre: number
    apellido: number
    idRol: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserDocenteAvgAggregateInputType = {
    id?: true
    idRol?: true
  }

  export type UserDocenteSumAggregateInputType = {
    id?: true
    idRol?: true
  }

  export type UserDocenteMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    apellido?: true
    idRol?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserDocenteMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    apellido?: true
    idRol?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserDocenteCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    apellido?: true
    idRol?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserDocenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDocente to aggregate.
     */
    where?: UserDocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDocentes to fetch.
     */
    orderBy?: UserDocenteOrderByWithRelationInput | UserDocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDocentes
    **/
    _count?: true | UserDocenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDocenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDocenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDocenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDocenteMaxAggregateInputType
  }

  export type GetUserDocenteAggregateType<T extends UserDocenteAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDocente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDocente[P]>
      : GetScalarType<T[P], AggregateUserDocente[P]>
  }




  export type UserDocenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDocenteWhereInput
    orderBy?: UserDocenteOrderByWithAggregationInput | UserDocenteOrderByWithAggregationInput[]
    by: UserDocenteScalarFieldEnum[] | UserDocenteScalarFieldEnum
    having?: UserDocenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDocenteCountAggregateInputType | true
    _avg?: UserDocenteAvgAggregateInputType
    _sum?: UserDocenteSumAggregateInputType
    _min?: UserDocenteMinAggregateInputType
    _max?: UserDocenteMaxAggregateInputType
  }

  export type UserDocenteGroupByOutputType = {
    id: number
    email: string
    password: string
    nombre: string
    apellido: string
    idRol: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: UserDocenteCountAggregateOutputType | null
    _avg: UserDocenteAvgAggregateOutputType | null
    _sum: UserDocenteSumAggregateOutputType | null
    _min: UserDocenteMinAggregateOutputType | null
    _max: UserDocenteMaxAggregateOutputType | null
  }

  type GetUserDocenteGroupByPayload<T extends UserDocenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDocenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDocenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDocenteGroupByOutputType[P]>
            : GetScalarType<T[P], UserDocenteGroupByOutputType[P]>
        }
      >
    >


  export type UserDocenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
    idRol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    rol?: boolean | RolesDefaultArgs<ExtArgs>
    Materia?: boolean | UserDocente$MateriaArgs<ExtArgs>
    _count?: boolean | UserDocenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDocente"]>

  export type UserDocenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
    idRol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    rol?: boolean | RolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDocente"]>

  export type UserDocenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
    idRol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    rol?: boolean | RolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDocente"]>

  export type UserDocenteSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
    idRol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserDocenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nombre" | "apellido" | "idRol" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["userDocente"]>
  export type UserDocenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolesDefaultArgs<ExtArgs>
    Materia?: boolean | UserDocente$MateriaArgs<ExtArgs>
    _count?: boolean | UserDocenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserDocenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolesDefaultArgs<ExtArgs>
  }
  export type UserDocenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolesDefaultArgs<ExtArgs>
  }

  export type $UserDocentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDocente"
    objects: {
      rol: Prisma.$RolesPayload<ExtArgs>
      Materia: Prisma.$MateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      nombre: string
      apellido: string
      idRol: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["userDocente"]>
    composites: {}
  }

  type UserDocenteGetPayload<S extends boolean | null | undefined | UserDocenteDefaultArgs> = $Result.GetResult<Prisma.$UserDocentePayload, S>

  type UserDocenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDocenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDocenteCountAggregateInputType | true
    }

  export interface UserDocenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDocente'], meta: { name: 'UserDocente' } }
    /**
     * Find zero or one UserDocente that matches the filter.
     * @param {UserDocenteFindUniqueArgs} args - Arguments to find a UserDocente
     * @example
     * // Get one UserDocente
     * const userDocente = await prisma.userDocente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDocenteFindUniqueArgs>(args: SelectSubset<T, UserDocenteFindUniqueArgs<ExtArgs>>): Prisma__UserDocenteClient<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDocente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDocenteFindUniqueOrThrowArgs} args - Arguments to find a UserDocente
     * @example
     * // Get one UserDocente
     * const userDocente = await prisma.userDocente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDocenteFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDocenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDocenteClient<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDocente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocenteFindFirstArgs} args - Arguments to find a UserDocente
     * @example
     * // Get one UserDocente
     * const userDocente = await prisma.userDocente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDocenteFindFirstArgs>(args?: SelectSubset<T, UserDocenteFindFirstArgs<ExtArgs>>): Prisma__UserDocenteClient<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDocente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocenteFindFirstOrThrowArgs} args - Arguments to find a UserDocente
     * @example
     * // Get one UserDocente
     * const userDocente = await prisma.userDocente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDocenteFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDocenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDocenteClient<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDocentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDocentes
     * const userDocentes = await prisma.userDocente.findMany()
     * 
     * // Get first 10 UserDocentes
     * const userDocentes = await prisma.userDocente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDocenteWithIdOnly = await prisma.userDocente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDocenteFindManyArgs>(args?: SelectSubset<T, UserDocenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDocente.
     * @param {UserDocenteCreateArgs} args - Arguments to create a UserDocente.
     * @example
     * // Create one UserDocente
     * const UserDocente = await prisma.userDocente.create({
     *   data: {
     *     // ... data to create a UserDocente
     *   }
     * })
     * 
     */
    create<T extends UserDocenteCreateArgs>(args: SelectSubset<T, UserDocenteCreateArgs<ExtArgs>>): Prisma__UserDocenteClient<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDocentes.
     * @param {UserDocenteCreateManyArgs} args - Arguments to create many UserDocentes.
     * @example
     * // Create many UserDocentes
     * const userDocente = await prisma.userDocente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDocenteCreateManyArgs>(args?: SelectSubset<T, UserDocenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDocentes and returns the data saved in the database.
     * @param {UserDocenteCreateManyAndReturnArgs} args - Arguments to create many UserDocentes.
     * @example
     * // Create many UserDocentes
     * const userDocente = await prisma.userDocente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDocentes and only return the `id`
     * const userDocenteWithIdOnly = await prisma.userDocente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDocenteCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDocenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDocente.
     * @param {UserDocenteDeleteArgs} args - Arguments to delete one UserDocente.
     * @example
     * // Delete one UserDocente
     * const UserDocente = await prisma.userDocente.delete({
     *   where: {
     *     // ... filter to delete one UserDocente
     *   }
     * })
     * 
     */
    delete<T extends UserDocenteDeleteArgs>(args: SelectSubset<T, UserDocenteDeleteArgs<ExtArgs>>): Prisma__UserDocenteClient<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDocente.
     * @param {UserDocenteUpdateArgs} args - Arguments to update one UserDocente.
     * @example
     * // Update one UserDocente
     * const userDocente = await prisma.userDocente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDocenteUpdateArgs>(args: SelectSubset<T, UserDocenteUpdateArgs<ExtArgs>>): Prisma__UserDocenteClient<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDocentes.
     * @param {UserDocenteDeleteManyArgs} args - Arguments to filter UserDocentes to delete.
     * @example
     * // Delete a few UserDocentes
     * const { count } = await prisma.userDocente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDocenteDeleteManyArgs>(args?: SelectSubset<T, UserDocenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDocentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDocentes
     * const userDocente = await prisma.userDocente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDocenteUpdateManyArgs>(args: SelectSubset<T, UserDocenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDocentes and returns the data updated in the database.
     * @param {UserDocenteUpdateManyAndReturnArgs} args - Arguments to update many UserDocentes.
     * @example
     * // Update many UserDocentes
     * const userDocente = await prisma.userDocente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDocentes and only return the `id`
     * const userDocenteWithIdOnly = await prisma.userDocente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDocenteUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDocenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDocente.
     * @param {UserDocenteUpsertArgs} args - Arguments to update or create a UserDocente.
     * @example
     * // Update or create a UserDocente
     * const userDocente = await prisma.userDocente.upsert({
     *   create: {
     *     // ... data to create a UserDocente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDocente we want to update
     *   }
     * })
     */
    upsert<T extends UserDocenteUpsertArgs>(args: SelectSubset<T, UserDocenteUpsertArgs<ExtArgs>>): Prisma__UserDocenteClient<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDocentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocenteCountArgs} args - Arguments to filter UserDocentes to count.
     * @example
     * // Count the number of UserDocentes
     * const count = await prisma.userDocente.count({
     *   where: {
     *     // ... the filter for the UserDocentes we want to count
     *   }
     * })
    **/
    count<T extends UserDocenteCountArgs>(
      args?: Subset<T, UserDocenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDocenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDocente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDocenteAggregateArgs>(args: Subset<T, UserDocenteAggregateArgs>): Prisma.PrismaPromise<GetUserDocenteAggregateType<T>>

    /**
     * Group by UserDocente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDocenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDocenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDocenteGroupByArgs['orderBy'] }
        : { orderBy?: UserDocenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDocenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDocenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDocente model
   */
  readonly fields: UserDocenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDocente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDocenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Materia<T extends UserDocente$MateriaArgs<ExtArgs> = {}>(args?: Subset<T, UserDocente$MateriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDocente model
   */
  interface UserDocenteFieldRefs {
    readonly id: FieldRef<"UserDocente", 'Int'>
    readonly email: FieldRef<"UserDocente", 'String'>
    readonly password: FieldRef<"UserDocente", 'String'>
    readonly nombre: FieldRef<"UserDocente", 'String'>
    readonly apellido: FieldRef<"UserDocente", 'String'>
    readonly idRol: FieldRef<"UserDocente", 'Int'>
    readonly createdAt: FieldRef<"UserDocente", 'DateTime'>
    readonly updatedAt: FieldRef<"UserDocente", 'DateTime'>
    readonly deletedAt: FieldRef<"UserDocente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDocente findUnique
   */
  export type UserDocenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteInclude<ExtArgs> | null
    /**
     * Filter, which UserDocente to fetch.
     */
    where: UserDocenteWhereUniqueInput
  }

  /**
   * UserDocente findUniqueOrThrow
   */
  export type UserDocenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteInclude<ExtArgs> | null
    /**
     * Filter, which UserDocente to fetch.
     */
    where: UserDocenteWhereUniqueInput
  }

  /**
   * UserDocente findFirst
   */
  export type UserDocenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteInclude<ExtArgs> | null
    /**
     * Filter, which UserDocente to fetch.
     */
    where?: UserDocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDocentes to fetch.
     */
    orderBy?: UserDocenteOrderByWithRelationInput | UserDocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDocentes.
     */
    cursor?: UserDocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDocentes.
     */
    distinct?: UserDocenteScalarFieldEnum | UserDocenteScalarFieldEnum[]
  }

  /**
   * UserDocente findFirstOrThrow
   */
  export type UserDocenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteInclude<ExtArgs> | null
    /**
     * Filter, which UserDocente to fetch.
     */
    where?: UserDocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDocentes to fetch.
     */
    orderBy?: UserDocenteOrderByWithRelationInput | UserDocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDocentes.
     */
    cursor?: UserDocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDocentes.
     */
    distinct?: UserDocenteScalarFieldEnum | UserDocenteScalarFieldEnum[]
  }

  /**
   * UserDocente findMany
   */
  export type UserDocenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteInclude<ExtArgs> | null
    /**
     * Filter, which UserDocentes to fetch.
     */
    where?: UserDocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDocentes to fetch.
     */
    orderBy?: UserDocenteOrderByWithRelationInput | UserDocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDocentes.
     */
    cursor?: UserDocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDocentes.
     */
    skip?: number
    distinct?: UserDocenteScalarFieldEnum | UserDocenteScalarFieldEnum[]
  }

  /**
   * UserDocente create
   */
  export type UserDocenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDocente.
     */
    data: XOR<UserDocenteCreateInput, UserDocenteUncheckedCreateInput>
  }

  /**
   * UserDocente createMany
   */
  export type UserDocenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDocentes.
     */
    data: UserDocenteCreateManyInput | UserDocenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDocente createManyAndReturn
   */
  export type UserDocenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * The data used to create many UserDocentes.
     */
    data: UserDocenteCreateManyInput | UserDocenteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDocente update
   */
  export type UserDocenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDocente.
     */
    data: XOR<UserDocenteUpdateInput, UserDocenteUncheckedUpdateInput>
    /**
     * Choose, which UserDocente to update.
     */
    where: UserDocenteWhereUniqueInput
  }

  /**
   * UserDocente updateMany
   */
  export type UserDocenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDocentes.
     */
    data: XOR<UserDocenteUpdateManyMutationInput, UserDocenteUncheckedUpdateManyInput>
    /**
     * Filter which UserDocentes to update
     */
    where?: UserDocenteWhereInput
    /**
     * Limit how many UserDocentes to update.
     */
    limit?: number
  }

  /**
   * UserDocente updateManyAndReturn
   */
  export type UserDocenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * The data used to update UserDocentes.
     */
    data: XOR<UserDocenteUpdateManyMutationInput, UserDocenteUncheckedUpdateManyInput>
    /**
     * Filter which UserDocentes to update
     */
    where?: UserDocenteWhereInput
    /**
     * Limit how many UserDocentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDocente upsert
   */
  export type UserDocenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDocente to update in case it exists.
     */
    where: UserDocenteWhereUniqueInput
    /**
     * In case the UserDocente found by the `where` argument doesn't exist, create a new UserDocente with this data.
     */
    create: XOR<UserDocenteCreateInput, UserDocenteUncheckedCreateInput>
    /**
     * In case the UserDocente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDocenteUpdateInput, UserDocenteUncheckedUpdateInput>
  }

  /**
   * UserDocente delete
   */
  export type UserDocenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteInclude<ExtArgs> | null
    /**
     * Filter which UserDocente to delete.
     */
    where: UserDocenteWhereUniqueInput
  }

  /**
   * UserDocente deleteMany
   */
  export type UserDocenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDocentes to delete
     */
    where?: UserDocenteWhereInput
    /**
     * Limit how many UserDocentes to delete.
     */
    limit?: number
  }

  /**
   * UserDocente.Materia
   */
  export type UserDocente$MateriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * UserDocente without action
   */
  export type UserDocenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteInclude<ExtArgs> | null
  }


  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    UserDocente?: boolean | Roles$UserDocenteArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["roles"]>
  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserDocente?: boolean | Roles$UserDocenteArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      UserDocente: Prisma.$UserDocentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolesCreateManyAndReturnArgs>(args?: SelectSubset<T, RolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolesUpdateManyAndReturnArgs>(args: SelectSubset<T, RolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserDocente<T extends Roles$UserDocenteArgs<ExtArgs> = {}>(args?: Subset<T, Roles$UserDocenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roles model
   */
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'Int'>
    readonly nombre: FieldRef<"Roles", 'String'>
    readonly descripcion: FieldRef<"Roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles createManyAndReturn
   */
  export type RolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles updateManyAndReturn
   */
  export type RolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Roles.UserDocente
   */
  export type Roles$UserDocenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDocente
     */
    select?: UserDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDocente
     */
    omit?: UserDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDocenteInclude<ExtArgs> | null
    where?: UserDocenteWhereInput
    orderBy?: UserDocenteOrderByWithRelationInput | UserDocenteOrderByWithRelationInput[]
    cursor?: UserDocenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDocenteScalarFieldEnum | UserDocenteScalarFieldEnum[]
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
  }


  /**
   * Model Materia
   */

  export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  export type MateriaAvgAggregateOutputType = {
    id: number | null
    idUserDocente: number | null
    idCurso: number | null
  }

  export type MateriaSumAggregateOutputType = {
    id: number | null
    idUserDocente: number | null
    idCurso: number | null
  }

  export type MateriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    idUserDocente: number | null
    idCurso: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MateriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    idUserDocente: number | null
    idCurso: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MateriaCountAggregateOutputType = {
    id: number
    nombre: number
    idUserDocente: number
    idCurso: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type MateriaAvgAggregateInputType = {
    id?: true
    idUserDocente?: true
    idCurso?: true
  }

  export type MateriaSumAggregateInputType = {
    id?: true
    idUserDocente?: true
    idCurso?: true
  }

  export type MateriaMinAggregateInputType = {
    id?: true
    nombre?: true
    idUserDocente?: true
    idCurso?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MateriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    idUserDocente?: true
    idCurso?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MateriaCountAggregateInputType = {
    id?: true
    nombre?: true
    idUserDocente?: true
    idCurso?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia to aggregate.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materias
    **/
    _count?: true | MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType
  }

  export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria[P]>
      : GetScalarType<T[P], AggregateMateria[P]>
  }




  export type MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithAggregationInput | MateriaOrderByWithAggregationInput[]
    by: MateriaScalarFieldEnum[] | MateriaScalarFieldEnum
    having?: MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaCountAggregateInputType | true
    _avg?: MateriaAvgAggregateInputType
    _sum?: MateriaSumAggregateInputType
    _min?: MateriaMinAggregateInputType
    _max?: MateriaMaxAggregateInputType
  }

  export type MateriaGroupByOutputType = {
    id: number
    nombre: string
    idUserDocente: number
    idCurso: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  type GetMateriaGroupByPayload<T extends MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaGroupByOutputType[P]>
        }
      >
    >


  export type MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    idUserDocente?: boolean
    idCurso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userDocente?: boolean | UserDocenteDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    idUserDocente?: boolean
    idCurso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userDocente?: boolean | UserDocenteDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    idUserDocente?: boolean
    idCurso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userDocente?: boolean | UserDocenteDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    idUserDocente?: boolean
    idCurso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type MateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "idUserDocente" | "idCurso" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["materia"]>
  export type MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDocente?: boolean | UserDocenteDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDocente?: boolean | UserDocenteDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDocente?: boolean | UserDocenteDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia"
    objects: {
      userDocente: Prisma.$UserDocentePayload<ExtArgs>
      curso: Prisma.$CursoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      idUserDocente: number
      idCurso: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["materia"]>
    composites: {}
  }

  type MateriaGetPayload<S extends boolean | null | undefined | MateriaDefaultArgs> = $Result.GetResult<Prisma.$MateriaPayload, S>

  type MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaCountAggregateInputType | true
    }

  export interface MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia'], meta: { name: 'Materia' } }
    /**
     * Find zero or one Materia that matches the filter.
     * @param {MateriaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaFindUniqueArgs>(args: SelectSubset<T, MateriaFindUniqueArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaFindFirstArgs>(args?: SelectSubset<T, MateriaFindFirstArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiaWithIdOnly = await prisma.materia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MateriaFindManyArgs>(args?: SelectSubset<T, MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia.
     * @param {MateriaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     * 
     */
    create<T extends MateriaCreateArgs>(args: SelectSubset<T, MateriaCreateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materias.
     * @param {MateriaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaCreateManyArgs>(args?: SelectSubset<T, MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materias and returns the data saved in the database.
     * @param {MateriaCreateManyAndReturnArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materia.
     * @param {MateriaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     * 
     */
    delete<T extends MateriaDeleteArgs>(args: SelectSubset<T, MateriaDeleteArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia.
     * @param {MateriaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaUpdateArgs>(args: SelectSubset<T, MateriaUpdateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materias.
     * @param {MateriaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaDeleteManyArgs>(args?: SelectSubset<T, MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaUpdateManyArgs>(args: SelectSubset<T, MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias and returns the data updated in the database.
     * @param {MateriaUpdateManyAndReturnArgs} args - Arguments to update many Materias.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materia.
     * @param {MateriaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends MateriaUpsertArgs>(args: SelectSubset<T, MateriaUpsertArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends MateriaCountArgs>(
      args?: Subset<T, MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MateriaAggregateArgs>(args: Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>

    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaGroupByArgs['orderBy'] }
        : { orderBy?: MateriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia model
   */
  readonly fields: MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userDocente<T extends UserDocenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDocenteDefaultArgs<ExtArgs>>): Prisma__UserDocenteClient<$Result.GetResult<Prisma.$UserDocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materia model
   */
  interface MateriaFieldRefs {
    readonly id: FieldRef<"Materia", 'Int'>
    readonly nombre: FieldRef<"Materia", 'String'>
    readonly idUserDocente: FieldRef<"Materia", 'Int'>
    readonly idCurso: FieldRef<"Materia", 'Int'>
    readonly createdAt: FieldRef<"Materia", 'DateTime'>
    readonly updatedAt: FieldRef<"Materia", 'DateTime'>
    readonly deletedAt: FieldRef<"Materia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Materia findUnique
   */
  export type MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findUniqueOrThrow
   */
  export type MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findFirst
   */
  export type MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findFirstOrThrow
   */
  export type MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findMany
   */
  export type MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia create
   */
  export type MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia.
     */
    data: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
  }

  /**
   * Materia createMany
   */
  export type MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia createManyAndReturn
   */
  export type MateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia update
   */
  export type MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia.
     */
    data: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
    /**
     * Choose, which Materia to update.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia updateMany
   */
  export type MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materia updateManyAndReturn
   */
  export type MateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia upsert
   */
  export type MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia to update in case it exists.
     */
    where: MateriaWhereUniqueInput
    /**
     * In case the Materia found by the `where` argument doesn't exist, create a new Materia with this data.
     */
    create: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
    /**
     * In case the Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
  }

  /**
   * Materia delete
   */
  export type MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter which Materia to delete.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia deleteMany
   */
  export type MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to delete
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to delete.
     */
    limit?: number
  }

  /**
   * Materia without action
   */
  export type MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoAvgAggregateOutputType = {
    id: number | null
  }

  export type CursoSumAggregateOutputType = {
    id: number | null
  }

  export type CursoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CursoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CursoCountAggregateOutputType = {
    id: number
    nombre: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CursoAvgAggregateInputType = {
    id?: true
  }

  export type CursoSumAggregateInputType = {
    id?: true
  }

  export type CursoMinAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CursoMaxAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CursoCountAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _avg?: CursoAvgAggregateInputType
    _sum?: CursoSumAggregateInputType
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id: number
    nombre: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Materia?: boolean | Curso$MateriaArgs<ExtArgs>
    alumnos?: boolean | Curso$alumnosArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectScalar = {
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["curso"]>
  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materia?: boolean | Curso$MateriaArgs<ExtArgs>
    alumnos?: boolean | Curso$alumnosArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      Materia: Prisma.$MateriaPayload<ExtArgs>[]
      alumnos: Prisma.$AlumnoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursoWithIdOnly = await prisma.curso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {CursoCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `id`
     * const cursoWithIdOnly = await prisma.curso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursoCreateManyAndReturnArgs>(args?: SelectSubset<T, CursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos and returns the data updated in the database.
     * @param {CursoUpdateManyAndReturnArgs} args - Arguments to update many Cursos.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursos and only return the `id`
     * const cursoWithIdOnly = await prisma.curso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CursoUpdateManyAndReturnArgs>(args: SelectSubset<T, CursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Materia<T extends Curso$MateriaArgs<ExtArgs> = {}>(args?: Subset<T, Curso$MateriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alumnos<T extends Curso$alumnosArgs<ExtArgs> = {}>(args?: Subset<T, Curso$alumnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curso model
   */
  interface CursoFieldRefs {
    readonly id: FieldRef<"Curso", 'Int'>
    readonly nombre: FieldRef<"Curso", 'String'>
    readonly createdAt: FieldRef<"Curso", 'DateTime'>
    readonly updatedAt: FieldRef<"Curso", 'DateTime'>
    readonly deletedAt: FieldRef<"Curso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso createManyAndReturn
   */
  export type CursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso updateManyAndReturn
   */
  export type CursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Curso.Materia
   */
  export type Curso$MateriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Curso.alumnos
   */
  export type Curso$alumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumno
     */
    select?: AlumnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumno
     */
    omit?: AlumnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoInclude<ExtArgs> | null
    where?: AlumnoWhereInput
    orderBy?: AlumnoOrderByWithRelationInput | AlumnoOrderByWithRelationInput[]
    cursor?: AlumnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlumnoScalarFieldEnum | AlumnoScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlumnoScalarFieldEnum: {
    id: 'id',
    legajo: 'legajo',
    nombre: 'nombre',
    apellido: 'apellido',
    celular: 'celular',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AlumnoScalarFieldEnum = (typeof AlumnoScalarFieldEnum)[keyof typeof AlumnoScalarFieldEnum]


  export const ClaseScalarFieldEnum: {
    id: 'id',
    fechaHora: 'fechaHora',
    idMateria: 'idMateria',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ClaseScalarFieldEnum = (typeof ClaseScalarFieldEnum)[keyof typeof ClaseScalarFieldEnum]


  export const AsistenciaScalarFieldEnum: {
    id: 'id',
    idAlumno: 'idAlumno',
    idClase: 'idClase',
    estado: 'estado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AsistenciaScalarFieldEnum = (typeof AsistenciaScalarFieldEnum)[keyof typeof AsistenciaScalarFieldEnum]


  export const UserDocenteScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nombre: 'nombre',
    apellido: 'apellido',
    idRol: 'idRol',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserDocenteScalarFieldEnum = (typeof UserDocenteScalarFieldEnum)[keyof typeof UserDocenteScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const MateriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    idUserDocente: 'idUserDocente',
    idCurso: 'idCurso',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Estado'
   */
  export type EnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado'>
    


  /**
   * Reference to a field of type 'Estado[]'
   */
  export type ListEnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AlumnoWhereInput = {
    AND?: AlumnoWhereInput | AlumnoWhereInput[]
    OR?: AlumnoWhereInput[]
    NOT?: AlumnoWhereInput | AlumnoWhereInput[]
    id?: IntFilter<"Alumno"> | number
    legajo?: StringFilter<"Alumno"> | string
    nombre?: StringFilter<"Alumno"> | string
    apellido?: StringFilter<"Alumno"> | string
    celular?: StringFilter<"Alumno"> | string
    createdAt?: DateTimeFilter<"Alumno"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Alumno"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Alumno"> | Date | string | null
    Asistencia?: AsistenciaListRelationFilter
    cursos?: CursoListRelationFilter
  }

  export type AlumnoOrderByWithRelationInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Asistencia?: AsistenciaOrderByRelationAggregateInput
    cursos?: CursoOrderByRelationAggregateInput
  }

  export type AlumnoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlumnoWhereInput | AlumnoWhereInput[]
    OR?: AlumnoWhereInput[]
    NOT?: AlumnoWhereInput | AlumnoWhereInput[]
    legajo?: StringFilter<"Alumno"> | string
    nombre?: StringFilter<"Alumno"> | string
    apellido?: StringFilter<"Alumno"> | string
    celular?: StringFilter<"Alumno"> | string
    createdAt?: DateTimeFilter<"Alumno"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Alumno"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Alumno"> | Date | string | null
    Asistencia?: AsistenciaListRelationFilter
    cursos?: CursoListRelationFilter
  }, "id">

  export type AlumnoOrderByWithAggregationInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AlumnoCountOrderByAggregateInput
    _avg?: AlumnoAvgOrderByAggregateInput
    _max?: AlumnoMaxOrderByAggregateInput
    _min?: AlumnoMinOrderByAggregateInput
    _sum?: AlumnoSumOrderByAggregateInput
  }

  export type AlumnoScalarWhereWithAggregatesInput = {
    AND?: AlumnoScalarWhereWithAggregatesInput | AlumnoScalarWhereWithAggregatesInput[]
    OR?: AlumnoScalarWhereWithAggregatesInput[]
    NOT?: AlumnoScalarWhereWithAggregatesInput | AlumnoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alumno"> | number
    legajo?: StringWithAggregatesFilter<"Alumno"> | string
    nombre?: StringWithAggregatesFilter<"Alumno"> | string
    apellido?: StringWithAggregatesFilter<"Alumno"> | string
    celular?: StringWithAggregatesFilter<"Alumno"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Alumno"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Alumno"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Alumno"> | Date | string | null
  }

  export type ClaseWhereInput = {
    AND?: ClaseWhereInput | ClaseWhereInput[]
    OR?: ClaseWhereInput[]
    NOT?: ClaseWhereInput | ClaseWhereInput[]
    id?: IntFilter<"Clase"> | number
    fechaHora?: DateTimeFilter<"Clase"> | Date | string
    idMateria?: IntFilter<"Clase"> | number
    createdAt?: DateTimeFilter<"Clase"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Clase"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Clase"> | Date | string | null
    Asistencia?: AsistenciaListRelationFilter
  }

  export type ClaseOrderByWithRelationInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    idMateria?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Asistencia?: AsistenciaOrderByRelationAggregateInput
  }

  export type ClaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClaseWhereInput | ClaseWhereInput[]
    OR?: ClaseWhereInput[]
    NOT?: ClaseWhereInput | ClaseWhereInput[]
    fechaHora?: DateTimeFilter<"Clase"> | Date | string
    idMateria?: IntFilter<"Clase"> | number
    createdAt?: DateTimeFilter<"Clase"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Clase"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Clase"> | Date | string | null
    Asistencia?: AsistenciaListRelationFilter
  }, "id">

  export type ClaseOrderByWithAggregationInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    idMateria?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ClaseCountOrderByAggregateInput
    _avg?: ClaseAvgOrderByAggregateInput
    _max?: ClaseMaxOrderByAggregateInput
    _min?: ClaseMinOrderByAggregateInput
    _sum?: ClaseSumOrderByAggregateInput
  }

  export type ClaseScalarWhereWithAggregatesInput = {
    AND?: ClaseScalarWhereWithAggregatesInput | ClaseScalarWhereWithAggregatesInput[]
    OR?: ClaseScalarWhereWithAggregatesInput[]
    NOT?: ClaseScalarWhereWithAggregatesInput | ClaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clase"> | number
    fechaHora?: DateTimeWithAggregatesFilter<"Clase"> | Date | string
    idMateria?: IntWithAggregatesFilter<"Clase"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Clase"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Clase"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Clase"> | Date | string | null
  }

  export type AsistenciaWhereInput = {
    AND?: AsistenciaWhereInput | AsistenciaWhereInput[]
    OR?: AsistenciaWhereInput[]
    NOT?: AsistenciaWhereInput | AsistenciaWhereInput[]
    id?: IntFilter<"Asistencia"> | number
    idAlumno?: IntFilter<"Asistencia"> | number
    idClase?: IntFilter<"Asistencia"> | number
    estado?: EnumEstadoFilter<"Asistencia"> | $Enums.Estado
    createdAt?: DateTimeFilter<"Asistencia"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Asistencia"> | Date | string | null
    alumno?: XOR<AlumnoScalarRelationFilter, AlumnoWhereInput>
    clase?: XOR<ClaseScalarRelationFilter, ClaseWhereInput>
  }

  export type AsistenciaOrderByWithRelationInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    alumno?: AlumnoOrderByWithRelationInput
    clase?: ClaseOrderByWithRelationInput
  }

  export type AsistenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AsistenciaWhereInput | AsistenciaWhereInput[]
    OR?: AsistenciaWhereInput[]
    NOT?: AsistenciaWhereInput | AsistenciaWhereInput[]
    idAlumno?: IntFilter<"Asistencia"> | number
    idClase?: IntFilter<"Asistencia"> | number
    estado?: EnumEstadoFilter<"Asistencia"> | $Enums.Estado
    createdAt?: DateTimeFilter<"Asistencia"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Asistencia"> | Date | string | null
    alumno?: XOR<AlumnoScalarRelationFilter, AlumnoWhereInput>
    clase?: XOR<ClaseScalarRelationFilter, ClaseWhereInput>
  }, "id">

  export type AsistenciaOrderByWithAggregationInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AsistenciaCountOrderByAggregateInput
    _avg?: AsistenciaAvgOrderByAggregateInput
    _max?: AsistenciaMaxOrderByAggregateInput
    _min?: AsistenciaMinOrderByAggregateInput
    _sum?: AsistenciaSumOrderByAggregateInput
  }

  export type AsistenciaScalarWhereWithAggregatesInput = {
    AND?: AsistenciaScalarWhereWithAggregatesInput | AsistenciaScalarWhereWithAggregatesInput[]
    OR?: AsistenciaScalarWhereWithAggregatesInput[]
    NOT?: AsistenciaScalarWhereWithAggregatesInput | AsistenciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Asistencia"> | number
    idAlumno?: IntWithAggregatesFilter<"Asistencia"> | number
    idClase?: IntWithAggregatesFilter<"Asistencia"> | number
    estado?: EnumEstadoWithAggregatesFilter<"Asistencia"> | $Enums.Estado
    createdAt?: DateTimeWithAggregatesFilter<"Asistencia"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Asistencia"> | Date | string | null
  }

  export type UserDocenteWhereInput = {
    AND?: UserDocenteWhereInput | UserDocenteWhereInput[]
    OR?: UserDocenteWhereInput[]
    NOT?: UserDocenteWhereInput | UserDocenteWhereInput[]
    id?: IntFilter<"UserDocente"> | number
    email?: StringFilter<"UserDocente"> | string
    password?: StringFilter<"UserDocente"> | string
    nombre?: StringFilter<"UserDocente"> | string
    apellido?: StringFilter<"UserDocente"> | string
    idRol?: IntFilter<"UserDocente"> | number
    createdAt?: DateTimeFilter<"UserDocente"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserDocente"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserDocente"> | Date | string | null
    rol?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    Materia?: MateriaListRelationFilter
  }

  export type UserDocenteOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    idRol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    rol?: RolesOrderByWithRelationInput
    Materia?: MateriaOrderByRelationAggregateInput
  }

  export type UserDocenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserDocenteWhereInput | UserDocenteWhereInput[]
    OR?: UserDocenteWhereInput[]
    NOT?: UserDocenteWhereInput | UserDocenteWhereInput[]
    password?: StringFilter<"UserDocente"> | string
    nombre?: StringFilter<"UserDocente"> | string
    apellido?: StringFilter<"UserDocente"> | string
    idRol?: IntFilter<"UserDocente"> | number
    createdAt?: DateTimeFilter<"UserDocente"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserDocente"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserDocente"> | Date | string | null
    rol?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    Materia?: MateriaListRelationFilter
  }, "id" | "email">

  export type UserDocenteOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    idRol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserDocenteCountOrderByAggregateInput
    _avg?: UserDocenteAvgOrderByAggregateInput
    _max?: UserDocenteMaxOrderByAggregateInput
    _min?: UserDocenteMinOrderByAggregateInput
    _sum?: UserDocenteSumOrderByAggregateInput
  }

  export type UserDocenteScalarWhereWithAggregatesInput = {
    AND?: UserDocenteScalarWhereWithAggregatesInput | UserDocenteScalarWhereWithAggregatesInput[]
    OR?: UserDocenteScalarWhereWithAggregatesInput[]
    NOT?: UserDocenteScalarWhereWithAggregatesInput | UserDocenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserDocente"> | number
    email?: StringWithAggregatesFilter<"UserDocente"> | string
    password?: StringWithAggregatesFilter<"UserDocente"> | string
    nombre?: StringWithAggregatesFilter<"UserDocente"> | string
    apellido?: StringWithAggregatesFilter<"UserDocente"> | string
    idRol?: IntWithAggregatesFilter<"UserDocente"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserDocente"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserDocente"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserDocente"> | Date | string | null
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: IntFilter<"Roles"> | number
    nombre?: StringFilter<"Roles"> | string
    descripcion?: StringFilter<"Roles"> | string
    UserDocente?: UserDocenteListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    UserDocente?: UserDocenteOrderByRelationAggregateInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    nombre?: StringFilter<"Roles"> | string
    descripcion?: StringFilter<"Roles"> | string
    UserDocente?: UserDocenteListRelationFilter
  }, "id">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Roles"> | number
    nombre?: StringWithAggregatesFilter<"Roles"> | string
    descripcion?: StringWithAggregatesFilter<"Roles"> | string
  }

  export type MateriaWhereInput = {
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    id?: IntFilter<"Materia"> | number
    nombre?: StringFilter<"Materia"> | string
    idUserDocente?: IntFilter<"Materia"> | number
    idCurso?: IntFilter<"Materia"> | number
    createdAt?: DateTimeFilter<"Materia"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Materia"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Materia"> | Date | string | null
    userDocente?: XOR<UserDocenteScalarRelationFilter, UserDocenteWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }

  export type MateriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userDocente?: UserDocenteOrderByWithRelationInput
    curso?: CursoOrderByWithRelationInput
  }

  export type MateriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    nombre?: StringFilter<"Materia"> | string
    idUserDocente?: IntFilter<"Materia"> | number
    idCurso?: IntFilter<"Materia"> | number
    createdAt?: DateTimeFilter<"Materia"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Materia"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Materia"> | Date | string | null
    userDocente?: XOR<UserDocenteScalarRelationFilter, UserDocenteWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }, "id">

  export type MateriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: MateriaCountOrderByAggregateInput
    _avg?: MateriaAvgOrderByAggregateInput
    _max?: MateriaMaxOrderByAggregateInput
    _min?: MateriaMinOrderByAggregateInput
    _sum?: MateriaSumOrderByAggregateInput
  }

  export type MateriaScalarWhereWithAggregatesInput = {
    AND?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    OR?: MateriaScalarWhereWithAggregatesInput[]
    NOT?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Materia"> | number
    nombre?: StringWithAggregatesFilter<"Materia"> | string
    idUserDocente?: IntWithAggregatesFilter<"Materia"> | number
    idCurso?: IntWithAggregatesFilter<"Materia"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Materia"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Materia"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Materia"> | Date | string | null
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    id?: IntFilter<"Curso"> | number
    nombre?: StringFilter<"Curso"> | string
    createdAt?: DateTimeFilter<"Curso"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Curso"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Curso"> | Date | string | null
    Materia?: MateriaListRelationFilter
    alumnos?: AlumnoListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Materia?: MateriaOrderByRelationAggregateInput
    alumnos?: AlumnoOrderByRelationAggregateInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    nombre?: StringFilter<"Curso"> | string
    createdAt?: DateTimeFilter<"Curso"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Curso"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Curso"> | Date | string | null
    Materia?: MateriaListRelationFilter
    alumnos?: AlumnoListRelationFilter
  }, "id">

  export type CursoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CursoCountOrderByAggregateInput
    _avg?: CursoAvgOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
    _sum?: CursoSumOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Curso"> | number
    nombre?: StringWithAggregatesFilter<"Curso"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Curso"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Curso"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Curso"> | Date | string | null
  }

  export type AlumnoCreateInput = {
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencia?: AsistenciaCreateNestedManyWithoutAlumnoInput
    cursos?: CursoCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnoUncheckedCreateInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencia?: AsistenciaUncheckedCreateNestedManyWithoutAlumnoInput
    cursos?: CursoUncheckedCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnoUpdateInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencia?: AsistenciaUpdateManyWithoutAlumnoNestedInput
    cursos?: CursoUpdateManyWithoutAlumnosNestedInput
  }

  export type AlumnoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencia?: AsistenciaUncheckedUpdateManyWithoutAlumnoNestedInput
    cursos?: CursoUncheckedUpdateManyWithoutAlumnosNestedInput
  }

  export type AlumnoCreateManyInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AlumnoUpdateManyMutationInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlumnoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClaseCreateInput = {
    fechaHora: Date | string
    idMateria: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencia?: AsistenciaCreateNestedManyWithoutClaseInput
  }

  export type ClaseUncheckedCreateInput = {
    id?: number
    fechaHora: Date | string
    idMateria: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencia?: AsistenciaUncheckedCreateNestedManyWithoutClaseInput
  }

  export type ClaseUpdateInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    idMateria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencia?: AsistenciaUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    idMateria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencia?: AsistenciaUncheckedUpdateManyWithoutClaseNestedInput
  }

  export type ClaseCreateManyInput = {
    id?: number
    fechaHora: Date | string
    idMateria: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ClaseUpdateManyMutationInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    idMateria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    idMateria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsistenciaCreateInput = {
    estado: $Enums.Estado
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alumno: AlumnoCreateNestedOneWithoutAsistenciaInput
    clase: ClaseCreateNestedOneWithoutAsistenciaInput
  }

  export type AsistenciaUncheckedCreateInput = {
    id?: number
    idAlumno: number
    idClase: number
    estado: $Enums.Estado
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AsistenciaUpdateInput = {
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alumno?: AlumnoUpdateOneRequiredWithoutAsistenciaNestedInput
    clase?: ClaseUpdateOneRequiredWithoutAsistenciaNestedInput
  }

  export type AsistenciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAlumno?: IntFieldUpdateOperationsInput | number
    idClase?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsistenciaCreateManyInput = {
    id?: number
    idAlumno: number
    idClase: number
    estado: $Enums.Estado
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AsistenciaUpdateManyMutationInput = {
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsistenciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAlumno?: IntFieldUpdateOperationsInput | number
    idClase?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDocenteCreateInput = {
    email: string
    password: string
    nombre: string
    apellido: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    rol: RolesCreateNestedOneWithoutUserDocenteInput
    Materia?: MateriaCreateNestedManyWithoutUserDocenteInput
  }

  export type UserDocenteUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    nombre: string
    apellido: string
    idRol: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materia?: MateriaUncheckedCreateNestedManyWithoutUserDocenteInput
  }

  export type UserDocenteUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: RolesUpdateOneRequiredWithoutUserDocenteNestedInput
    Materia?: MateriaUpdateManyWithoutUserDocenteNestedInput
  }

  export type UserDocenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    idRol?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materia?: MateriaUncheckedUpdateManyWithoutUserDocenteNestedInput
  }

  export type UserDocenteCreateManyInput = {
    id?: number
    email: string
    password: string
    nombre: string
    apellido: string
    idRol: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserDocenteUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDocenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    idRol?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RolesCreateInput = {
    nombre: string
    descripcion: string
    UserDocente?: UserDocenteCreateNestedManyWithoutRolInput
  }

  export type RolesUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    UserDocente?: UserDocenteUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    UserDocente?: UserDocenteUpdateManyWithoutRolNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    UserDocente?: UserDocenteUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolesCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
  }

  export type RolesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaCreateInput = {
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    userDocente: UserDocenteCreateNestedOneWithoutMateriaInput
    curso: CursoCreateNestedOneWithoutMateriaInput
  }

  export type MateriaUncheckedCreateInput = {
    id?: number
    nombre: string
    idUserDocente: number
    idCurso: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MateriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userDocente?: UserDocenteUpdateOneRequiredWithoutMateriaNestedInput
    curso?: CursoUpdateOneRequiredWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idUserDocente?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MateriaCreateManyInput = {
    id?: number
    nombre: string
    idUserDocente: number
    idCurso: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MateriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MateriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idUserDocente?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CursoCreateInput = {
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materia?: MateriaCreateNestedManyWithoutCursoInput
    alumnos?: AlumnoCreateNestedManyWithoutCursosInput
  }

  export type CursoUncheckedCreateInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materia?: MateriaUncheckedCreateNestedManyWithoutCursoInput
    alumnos?: AlumnoUncheckedCreateNestedManyWithoutCursosInput
  }

  export type CursoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materia?: MateriaUpdateManyWithoutCursoNestedInput
    alumnos?: AlumnoUpdateManyWithoutCursosNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materia?: MateriaUncheckedUpdateManyWithoutCursoNestedInput
    alumnos?: AlumnoUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type CursoCreateManyInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CursoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AsistenciaListRelationFilter = {
    every?: AsistenciaWhereInput
    some?: AsistenciaWhereInput
    none?: AsistenciaWhereInput
  }

  export type CursoListRelationFilter = {
    every?: CursoWhereInput
    some?: CursoWhereInput
    none?: CursoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AsistenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlumnoCountOrderByAggregateInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AlumnoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlumnoMaxOrderByAggregateInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AlumnoMinOrderByAggregateInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AlumnoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ClaseCountOrderByAggregateInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    idMateria?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClaseAvgOrderByAggregateInput = {
    id?: SortOrder
    idMateria?: SortOrder
  }

  export type ClaseMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    idMateria?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClaseMinOrderByAggregateInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    idMateria?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClaseSumOrderByAggregateInput = {
    id?: SortOrder
    idMateria?: SortOrder
  }

  export type EnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type AlumnoScalarRelationFilter = {
    is?: AlumnoWhereInput
    isNot?: AlumnoWhereInput
  }

  export type ClaseScalarRelationFilter = {
    is?: ClaseWhereInput
    isNot?: ClaseWhereInput
  }

  export type AsistenciaCountOrderByAggregateInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsistenciaAvgOrderByAggregateInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
  }

  export type AsistenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsistenciaMinOrderByAggregateInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsistenciaSumOrderByAggregateInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
  }

  export type EnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type RolesScalarRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type MateriaListRelationFilter = {
    every?: MateriaWhereInput
    some?: MateriaWhereInput
    none?: MateriaWhereInput
  }

  export type MateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDocenteCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    idRol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserDocenteAvgOrderByAggregateInput = {
    id?: SortOrder
    idRol?: SortOrder
  }

  export type UserDocenteMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    idRol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserDocenteMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    idRol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserDocenteSumOrderByAggregateInput = {
    id?: SortOrder
    idRol?: SortOrder
  }

  export type UserDocenteListRelationFilter = {
    every?: UserDocenteWhereInput
    some?: UserDocenteWhereInput
    none?: UserDocenteWhereInput
  }

  export type UserDocenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserDocenteScalarRelationFilter = {
    is?: UserDocenteWhereInput
    isNot?: UserDocenteWhereInput
  }

  export type CursoScalarRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type MateriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MateriaAvgOrderByAggregateInput = {
    id?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
  }

  export type MateriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MateriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MateriaSumOrderByAggregateInput = {
    id?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
  }

  export type AlumnoListRelationFilter = {
    every?: AlumnoWhereInput
    some?: AlumnoWhereInput
    none?: AlumnoWhereInput
  }

  export type AlumnoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CursoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CursoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CursoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AsistenciaCreateNestedManyWithoutAlumnoInput = {
    create?: XOR<AsistenciaCreateWithoutAlumnoInput, AsistenciaUncheckedCreateWithoutAlumnoInput> | AsistenciaCreateWithoutAlumnoInput[] | AsistenciaUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutAlumnoInput | AsistenciaCreateOrConnectWithoutAlumnoInput[]
    createMany?: AsistenciaCreateManyAlumnoInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type CursoCreateNestedManyWithoutAlumnosInput = {
    create?: XOR<CursoCreateWithoutAlumnosInput, CursoUncheckedCreateWithoutAlumnosInput> | CursoCreateWithoutAlumnosInput[] | CursoUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutAlumnosInput | CursoCreateOrConnectWithoutAlumnosInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type AsistenciaUncheckedCreateNestedManyWithoutAlumnoInput = {
    create?: XOR<AsistenciaCreateWithoutAlumnoInput, AsistenciaUncheckedCreateWithoutAlumnoInput> | AsistenciaCreateWithoutAlumnoInput[] | AsistenciaUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutAlumnoInput | AsistenciaCreateOrConnectWithoutAlumnoInput[]
    createMany?: AsistenciaCreateManyAlumnoInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type CursoUncheckedCreateNestedManyWithoutAlumnosInput = {
    create?: XOR<CursoCreateWithoutAlumnosInput, CursoUncheckedCreateWithoutAlumnosInput> | CursoCreateWithoutAlumnosInput[] | CursoUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutAlumnosInput | CursoCreateOrConnectWithoutAlumnosInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AsistenciaUpdateManyWithoutAlumnoNestedInput = {
    create?: XOR<AsistenciaCreateWithoutAlumnoInput, AsistenciaUncheckedCreateWithoutAlumnoInput> | AsistenciaCreateWithoutAlumnoInput[] | AsistenciaUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutAlumnoInput | AsistenciaCreateOrConnectWithoutAlumnoInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutAlumnoInput | AsistenciaUpsertWithWhereUniqueWithoutAlumnoInput[]
    createMany?: AsistenciaCreateManyAlumnoInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutAlumnoInput | AsistenciaUpdateWithWhereUniqueWithoutAlumnoInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutAlumnoInput | AsistenciaUpdateManyWithWhereWithoutAlumnoInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type CursoUpdateManyWithoutAlumnosNestedInput = {
    create?: XOR<CursoCreateWithoutAlumnosInput, CursoUncheckedCreateWithoutAlumnosInput> | CursoCreateWithoutAlumnosInput[] | CursoUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutAlumnosInput | CursoCreateOrConnectWithoutAlumnosInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutAlumnosInput | CursoUpsertWithWhereUniqueWithoutAlumnosInput[]
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutAlumnosInput | CursoUpdateWithWhereUniqueWithoutAlumnosInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutAlumnosInput | CursoUpdateManyWithWhereWithoutAlumnosInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AsistenciaUncheckedUpdateManyWithoutAlumnoNestedInput = {
    create?: XOR<AsistenciaCreateWithoutAlumnoInput, AsistenciaUncheckedCreateWithoutAlumnoInput> | AsistenciaCreateWithoutAlumnoInput[] | AsistenciaUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutAlumnoInput | AsistenciaCreateOrConnectWithoutAlumnoInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutAlumnoInput | AsistenciaUpsertWithWhereUniqueWithoutAlumnoInput[]
    createMany?: AsistenciaCreateManyAlumnoInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutAlumnoInput | AsistenciaUpdateWithWhereUniqueWithoutAlumnoInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutAlumnoInput | AsistenciaUpdateManyWithWhereWithoutAlumnoInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type CursoUncheckedUpdateManyWithoutAlumnosNestedInput = {
    create?: XOR<CursoCreateWithoutAlumnosInput, CursoUncheckedCreateWithoutAlumnosInput> | CursoCreateWithoutAlumnosInput[] | CursoUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutAlumnosInput | CursoCreateOrConnectWithoutAlumnosInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutAlumnosInput | CursoUpsertWithWhereUniqueWithoutAlumnosInput[]
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutAlumnosInput | CursoUpdateWithWhereUniqueWithoutAlumnosInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutAlumnosInput | CursoUpdateManyWithWhereWithoutAlumnosInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type AsistenciaCreateNestedManyWithoutClaseInput = {
    create?: XOR<AsistenciaCreateWithoutClaseInput, AsistenciaUncheckedCreateWithoutClaseInput> | AsistenciaCreateWithoutClaseInput[] | AsistenciaUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutClaseInput | AsistenciaCreateOrConnectWithoutClaseInput[]
    createMany?: AsistenciaCreateManyClaseInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type AsistenciaUncheckedCreateNestedManyWithoutClaseInput = {
    create?: XOR<AsistenciaCreateWithoutClaseInput, AsistenciaUncheckedCreateWithoutClaseInput> | AsistenciaCreateWithoutClaseInput[] | AsistenciaUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutClaseInput | AsistenciaCreateOrConnectWithoutClaseInput[]
    createMany?: AsistenciaCreateManyClaseInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type AsistenciaUpdateManyWithoutClaseNestedInput = {
    create?: XOR<AsistenciaCreateWithoutClaseInput, AsistenciaUncheckedCreateWithoutClaseInput> | AsistenciaCreateWithoutClaseInput[] | AsistenciaUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutClaseInput | AsistenciaCreateOrConnectWithoutClaseInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutClaseInput | AsistenciaUpsertWithWhereUniqueWithoutClaseInput[]
    createMany?: AsistenciaCreateManyClaseInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutClaseInput | AsistenciaUpdateWithWhereUniqueWithoutClaseInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutClaseInput | AsistenciaUpdateManyWithWhereWithoutClaseInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type AsistenciaUncheckedUpdateManyWithoutClaseNestedInput = {
    create?: XOR<AsistenciaCreateWithoutClaseInput, AsistenciaUncheckedCreateWithoutClaseInput> | AsistenciaCreateWithoutClaseInput[] | AsistenciaUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutClaseInput | AsistenciaCreateOrConnectWithoutClaseInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutClaseInput | AsistenciaUpsertWithWhereUniqueWithoutClaseInput[]
    createMany?: AsistenciaCreateManyClaseInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutClaseInput | AsistenciaUpdateWithWhereUniqueWithoutClaseInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutClaseInput | AsistenciaUpdateManyWithWhereWithoutClaseInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type AlumnoCreateNestedOneWithoutAsistenciaInput = {
    create?: XOR<AlumnoCreateWithoutAsistenciaInput, AlumnoUncheckedCreateWithoutAsistenciaInput>
    connectOrCreate?: AlumnoCreateOrConnectWithoutAsistenciaInput
    connect?: AlumnoWhereUniqueInput
  }

  export type ClaseCreateNestedOneWithoutAsistenciaInput = {
    create?: XOR<ClaseCreateWithoutAsistenciaInput, ClaseUncheckedCreateWithoutAsistenciaInput>
    connectOrCreate?: ClaseCreateOrConnectWithoutAsistenciaInput
    connect?: ClaseWhereUniqueInput
  }

  export type EnumEstadoFieldUpdateOperationsInput = {
    set?: $Enums.Estado
  }

  export type AlumnoUpdateOneRequiredWithoutAsistenciaNestedInput = {
    create?: XOR<AlumnoCreateWithoutAsistenciaInput, AlumnoUncheckedCreateWithoutAsistenciaInput>
    connectOrCreate?: AlumnoCreateOrConnectWithoutAsistenciaInput
    upsert?: AlumnoUpsertWithoutAsistenciaInput
    connect?: AlumnoWhereUniqueInput
    update?: XOR<XOR<AlumnoUpdateToOneWithWhereWithoutAsistenciaInput, AlumnoUpdateWithoutAsistenciaInput>, AlumnoUncheckedUpdateWithoutAsistenciaInput>
  }

  export type ClaseUpdateOneRequiredWithoutAsistenciaNestedInput = {
    create?: XOR<ClaseCreateWithoutAsistenciaInput, ClaseUncheckedCreateWithoutAsistenciaInput>
    connectOrCreate?: ClaseCreateOrConnectWithoutAsistenciaInput
    upsert?: ClaseUpsertWithoutAsistenciaInput
    connect?: ClaseWhereUniqueInput
    update?: XOR<XOR<ClaseUpdateToOneWithWhereWithoutAsistenciaInput, ClaseUpdateWithoutAsistenciaInput>, ClaseUncheckedUpdateWithoutAsistenciaInput>
  }

  export type RolesCreateNestedOneWithoutUserDocenteInput = {
    create?: XOR<RolesCreateWithoutUserDocenteInput, RolesUncheckedCreateWithoutUserDocenteInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUserDocenteInput
    connect?: RolesWhereUniqueInput
  }

  export type MateriaCreateNestedManyWithoutUserDocenteInput = {
    create?: XOR<MateriaCreateWithoutUserDocenteInput, MateriaUncheckedCreateWithoutUserDocenteInput> | MateriaCreateWithoutUserDocenteInput[] | MateriaUncheckedCreateWithoutUserDocenteInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutUserDocenteInput | MateriaCreateOrConnectWithoutUserDocenteInput[]
    createMany?: MateriaCreateManyUserDocenteInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutUserDocenteInput = {
    create?: XOR<MateriaCreateWithoutUserDocenteInput, MateriaUncheckedCreateWithoutUserDocenteInput> | MateriaCreateWithoutUserDocenteInput[] | MateriaUncheckedCreateWithoutUserDocenteInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutUserDocenteInput | MateriaCreateOrConnectWithoutUserDocenteInput[]
    createMany?: MateriaCreateManyUserDocenteInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type RolesUpdateOneRequiredWithoutUserDocenteNestedInput = {
    create?: XOR<RolesCreateWithoutUserDocenteInput, RolesUncheckedCreateWithoutUserDocenteInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUserDocenteInput
    upsert?: RolesUpsertWithoutUserDocenteInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutUserDocenteInput, RolesUpdateWithoutUserDocenteInput>, RolesUncheckedUpdateWithoutUserDocenteInput>
  }

  export type MateriaUpdateManyWithoutUserDocenteNestedInput = {
    create?: XOR<MateriaCreateWithoutUserDocenteInput, MateriaUncheckedCreateWithoutUserDocenteInput> | MateriaCreateWithoutUserDocenteInput[] | MateriaUncheckedCreateWithoutUserDocenteInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutUserDocenteInput | MateriaCreateOrConnectWithoutUserDocenteInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutUserDocenteInput | MateriaUpsertWithWhereUniqueWithoutUserDocenteInput[]
    createMany?: MateriaCreateManyUserDocenteInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutUserDocenteInput | MateriaUpdateWithWhereUniqueWithoutUserDocenteInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutUserDocenteInput | MateriaUpdateManyWithWhereWithoutUserDocenteInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutUserDocenteNestedInput = {
    create?: XOR<MateriaCreateWithoutUserDocenteInput, MateriaUncheckedCreateWithoutUserDocenteInput> | MateriaCreateWithoutUserDocenteInput[] | MateriaUncheckedCreateWithoutUserDocenteInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutUserDocenteInput | MateriaCreateOrConnectWithoutUserDocenteInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutUserDocenteInput | MateriaUpsertWithWhereUniqueWithoutUserDocenteInput[]
    createMany?: MateriaCreateManyUserDocenteInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutUserDocenteInput | MateriaUpdateWithWhereUniqueWithoutUserDocenteInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutUserDocenteInput | MateriaUpdateManyWithWhereWithoutUserDocenteInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type UserDocenteCreateNestedManyWithoutRolInput = {
    create?: XOR<UserDocenteCreateWithoutRolInput, UserDocenteUncheckedCreateWithoutRolInput> | UserDocenteCreateWithoutRolInput[] | UserDocenteUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UserDocenteCreateOrConnectWithoutRolInput | UserDocenteCreateOrConnectWithoutRolInput[]
    createMany?: UserDocenteCreateManyRolInputEnvelope
    connect?: UserDocenteWhereUniqueInput | UserDocenteWhereUniqueInput[]
  }

  export type UserDocenteUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UserDocenteCreateWithoutRolInput, UserDocenteUncheckedCreateWithoutRolInput> | UserDocenteCreateWithoutRolInput[] | UserDocenteUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UserDocenteCreateOrConnectWithoutRolInput | UserDocenteCreateOrConnectWithoutRolInput[]
    createMany?: UserDocenteCreateManyRolInputEnvelope
    connect?: UserDocenteWhereUniqueInput | UserDocenteWhereUniqueInput[]
  }

  export type UserDocenteUpdateManyWithoutRolNestedInput = {
    create?: XOR<UserDocenteCreateWithoutRolInput, UserDocenteUncheckedCreateWithoutRolInput> | UserDocenteCreateWithoutRolInput[] | UserDocenteUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UserDocenteCreateOrConnectWithoutRolInput | UserDocenteCreateOrConnectWithoutRolInput[]
    upsert?: UserDocenteUpsertWithWhereUniqueWithoutRolInput | UserDocenteUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UserDocenteCreateManyRolInputEnvelope
    set?: UserDocenteWhereUniqueInput | UserDocenteWhereUniqueInput[]
    disconnect?: UserDocenteWhereUniqueInput | UserDocenteWhereUniqueInput[]
    delete?: UserDocenteWhereUniqueInput | UserDocenteWhereUniqueInput[]
    connect?: UserDocenteWhereUniqueInput | UserDocenteWhereUniqueInput[]
    update?: UserDocenteUpdateWithWhereUniqueWithoutRolInput | UserDocenteUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UserDocenteUpdateManyWithWhereWithoutRolInput | UserDocenteUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UserDocenteScalarWhereInput | UserDocenteScalarWhereInput[]
  }

  export type UserDocenteUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UserDocenteCreateWithoutRolInput, UserDocenteUncheckedCreateWithoutRolInput> | UserDocenteCreateWithoutRolInput[] | UserDocenteUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UserDocenteCreateOrConnectWithoutRolInput | UserDocenteCreateOrConnectWithoutRolInput[]
    upsert?: UserDocenteUpsertWithWhereUniqueWithoutRolInput | UserDocenteUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UserDocenteCreateManyRolInputEnvelope
    set?: UserDocenteWhereUniqueInput | UserDocenteWhereUniqueInput[]
    disconnect?: UserDocenteWhereUniqueInput | UserDocenteWhereUniqueInput[]
    delete?: UserDocenteWhereUniqueInput | UserDocenteWhereUniqueInput[]
    connect?: UserDocenteWhereUniqueInput | UserDocenteWhereUniqueInput[]
    update?: UserDocenteUpdateWithWhereUniqueWithoutRolInput | UserDocenteUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UserDocenteUpdateManyWithWhereWithoutRolInput | UserDocenteUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UserDocenteScalarWhereInput | UserDocenteScalarWhereInput[]
  }

  export type UserDocenteCreateNestedOneWithoutMateriaInput = {
    create?: XOR<UserDocenteCreateWithoutMateriaInput, UserDocenteUncheckedCreateWithoutMateriaInput>
    connectOrCreate?: UserDocenteCreateOrConnectWithoutMateriaInput
    connect?: UserDocenteWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutMateriaInput = {
    create?: XOR<CursoCreateWithoutMateriaInput, CursoUncheckedCreateWithoutMateriaInput>
    connectOrCreate?: CursoCreateOrConnectWithoutMateriaInput
    connect?: CursoWhereUniqueInput
  }

  export type UserDocenteUpdateOneRequiredWithoutMateriaNestedInput = {
    create?: XOR<UserDocenteCreateWithoutMateriaInput, UserDocenteUncheckedCreateWithoutMateriaInput>
    connectOrCreate?: UserDocenteCreateOrConnectWithoutMateriaInput
    upsert?: UserDocenteUpsertWithoutMateriaInput
    connect?: UserDocenteWhereUniqueInput
    update?: XOR<XOR<UserDocenteUpdateToOneWithWhereWithoutMateriaInput, UserDocenteUpdateWithoutMateriaInput>, UserDocenteUncheckedUpdateWithoutMateriaInput>
  }

  export type CursoUpdateOneRequiredWithoutMateriaNestedInput = {
    create?: XOR<CursoCreateWithoutMateriaInput, CursoUncheckedCreateWithoutMateriaInput>
    connectOrCreate?: CursoCreateOrConnectWithoutMateriaInput
    upsert?: CursoUpsertWithoutMateriaInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutMateriaInput, CursoUpdateWithoutMateriaInput>, CursoUncheckedUpdateWithoutMateriaInput>
  }

  export type MateriaCreateNestedManyWithoutCursoInput = {
    create?: XOR<MateriaCreateWithoutCursoInput, MateriaUncheckedCreateWithoutCursoInput> | MateriaCreateWithoutCursoInput[] | MateriaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCursoInput | MateriaCreateOrConnectWithoutCursoInput[]
    createMany?: MateriaCreateManyCursoInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type AlumnoCreateNestedManyWithoutCursosInput = {
    create?: XOR<AlumnoCreateWithoutCursosInput, AlumnoUncheckedCreateWithoutCursosInput> | AlumnoCreateWithoutCursosInput[] | AlumnoUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutCursosInput | AlumnoCreateOrConnectWithoutCursosInput[]
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<MateriaCreateWithoutCursoInput, MateriaUncheckedCreateWithoutCursoInput> | MateriaCreateWithoutCursoInput[] | MateriaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCursoInput | MateriaCreateOrConnectWithoutCursoInput[]
    createMany?: MateriaCreateManyCursoInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type AlumnoUncheckedCreateNestedManyWithoutCursosInput = {
    create?: XOR<AlumnoCreateWithoutCursosInput, AlumnoUncheckedCreateWithoutCursosInput> | AlumnoCreateWithoutCursosInput[] | AlumnoUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutCursosInput | AlumnoCreateOrConnectWithoutCursosInput[]
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
  }

  export type MateriaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<MateriaCreateWithoutCursoInput, MateriaUncheckedCreateWithoutCursoInput> | MateriaCreateWithoutCursoInput[] | MateriaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCursoInput | MateriaCreateOrConnectWithoutCursoInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCursoInput | MateriaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: MateriaCreateManyCursoInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCursoInput | MateriaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCursoInput | MateriaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type AlumnoUpdateManyWithoutCursosNestedInput = {
    create?: XOR<AlumnoCreateWithoutCursosInput, AlumnoUncheckedCreateWithoutCursosInput> | AlumnoCreateWithoutCursosInput[] | AlumnoUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutCursosInput | AlumnoCreateOrConnectWithoutCursosInput[]
    upsert?: AlumnoUpsertWithWhereUniqueWithoutCursosInput | AlumnoUpsertWithWhereUniqueWithoutCursosInput[]
    set?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    disconnect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    delete?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    update?: AlumnoUpdateWithWhereUniqueWithoutCursosInput | AlumnoUpdateWithWhereUniqueWithoutCursosInput[]
    updateMany?: AlumnoUpdateManyWithWhereWithoutCursosInput | AlumnoUpdateManyWithWhereWithoutCursosInput[]
    deleteMany?: AlumnoScalarWhereInput | AlumnoScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<MateriaCreateWithoutCursoInput, MateriaUncheckedCreateWithoutCursoInput> | MateriaCreateWithoutCursoInput[] | MateriaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCursoInput | MateriaCreateOrConnectWithoutCursoInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCursoInput | MateriaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: MateriaCreateManyCursoInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCursoInput | MateriaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCursoInput | MateriaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type AlumnoUncheckedUpdateManyWithoutCursosNestedInput = {
    create?: XOR<AlumnoCreateWithoutCursosInput, AlumnoUncheckedCreateWithoutCursosInput> | AlumnoCreateWithoutCursosInput[] | AlumnoUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: AlumnoCreateOrConnectWithoutCursosInput | AlumnoCreateOrConnectWithoutCursosInput[]
    upsert?: AlumnoUpsertWithWhereUniqueWithoutCursosInput | AlumnoUpsertWithWhereUniqueWithoutCursosInput[]
    set?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    disconnect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    delete?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    connect?: AlumnoWhereUniqueInput | AlumnoWhereUniqueInput[]
    update?: AlumnoUpdateWithWhereUniqueWithoutCursosInput | AlumnoUpdateWithWhereUniqueWithoutCursosInput[]
    updateMany?: AlumnoUpdateManyWithWhereWithoutCursosInput | AlumnoUpdateManyWithWhereWithoutCursosInput[]
    deleteMany?: AlumnoScalarWhereInput | AlumnoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type NestedEnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type AsistenciaCreateWithoutAlumnoInput = {
    estado: $Enums.Estado
    createdAt?: Date | string
    updatedAt?: Date | string | null
    clase: ClaseCreateNestedOneWithoutAsistenciaInput
  }

  export type AsistenciaUncheckedCreateWithoutAlumnoInput = {
    id?: number
    idClase: number
    estado: $Enums.Estado
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AsistenciaCreateOrConnectWithoutAlumnoInput = {
    where: AsistenciaWhereUniqueInput
    create: XOR<AsistenciaCreateWithoutAlumnoInput, AsistenciaUncheckedCreateWithoutAlumnoInput>
  }

  export type AsistenciaCreateManyAlumnoInputEnvelope = {
    data: AsistenciaCreateManyAlumnoInput | AsistenciaCreateManyAlumnoInput[]
    skipDuplicates?: boolean
  }

  export type CursoCreateWithoutAlumnosInput = {
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materia?: MateriaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutAlumnosInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materia?: MateriaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutAlumnosInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutAlumnosInput, CursoUncheckedCreateWithoutAlumnosInput>
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutAlumnoInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutAlumnoInput, AsistenciaUncheckedUpdateWithoutAlumnoInput>
    create: XOR<AsistenciaCreateWithoutAlumnoInput, AsistenciaUncheckedCreateWithoutAlumnoInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutAlumnoInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutAlumnoInput, AsistenciaUncheckedUpdateWithoutAlumnoInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutAlumnoInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutAlumnoInput>
  }

  export type AsistenciaScalarWhereInput = {
    AND?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
    OR?: AsistenciaScalarWhereInput[]
    NOT?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
    id?: IntFilter<"Asistencia"> | number
    idAlumno?: IntFilter<"Asistencia"> | number
    idClase?: IntFilter<"Asistencia"> | number
    estado?: EnumEstadoFilter<"Asistencia"> | $Enums.Estado
    createdAt?: DateTimeFilter<"Asistencia"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Asistencia"> | Date | string | null
  }

  export type CursoUpsertWithWhereUniqueWithoutAlumnosInput = {
    where: CursoWhereUniqueInput
    update: XOR<CursoUpdateWithoutAlumnosInput, CursoUncheckedUpdateWithoutAlumnosInput>
    create: XOR<CursoCreateWithoutAlumnosInput, CursoUncheckedCreateWithoutAlumnosInput>
  }

  export type CursoUpdateWithWhereUniqueWithoutAlumnosInput = {
    where: CursoWhereUniqueInput
    data: XOR<CursoUpdateWithoutAlumnosInput, CursoUncheckedUpdateWithoutAlumnosInput>
  }

  export type CursoUpdateManyWithWhereWithoutAlumnosInput = {
    where: CursoScalarWhereInput
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyWithoutAlumnosInput>
  }

  export type CursoScalarWhereInput = {
    AND?: CursoScalarWhereInput | CursoScalarWhereInput[]
    OR?: CursoScalarWhereInput[]
    NOT?: CursoScalarWhereInput | CursoScalarWhereInput[]
    id?: IntFilter<"Curso"> | number
    nombre?: StringFilter<"Curso"> | string
    createdAt?: DateTimeFilter<"Curso"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Curso"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Curso"> | Date | string | null
  }

  export type AsistenciaCreateWithoutClaseInput = {
    estado: $Enums.Estado
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alumno: AlumnoCreateNestedOneWithoutAsistenciaInput
  }

  export type AsistenciaUncheckedCreateWithoutClaseInput = {
    id?: number
    idAlumno: number
    estado: $Enums.Estado
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AsistenciaCreateOrConnectWithoutClaseInput = {
    where: AsistenciaWhereUniqueInput
    create: XOR<AsistenciaCreateWithoutClaseInput, AsistenciaUncheckedCreateWithoutClaseInput>
  }

  export type AsistenciaCreateManyClaseInputEnvelope = {
    data: AsistenciaCreateManyClaseInput | AsistenciaCreateManyClaseInput[]
    skipDuplicates?: boolean
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutClaseInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutClaseInput, AsistenciaUncheckedUpdateWithoutClaseInput>
    create: XOR<AsistenciaCreateWithoutClaseInput, AsistenciaUncheckedCreateWithoutClaseInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutClaseInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutClaseInput, AsistenciaUncheckedUpdateWithoutClaseInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutClaseInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutClaseInput>
  }

  export type AlumnoCreateWithoutAsistenciaInput = {
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    cursos?: CursoCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnoUncheckedCreateWithoutAsistenciaInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    cursos?: CursoUncheckedCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnoCreateOrConnectWithoutAsistenciaInput = {
    where: AlumnoWhereUniqueInput
    create: XOR<AlumnoCreateWithoutAsistenciaInput, AlumnoUncheckedCreateWithoutAsistenciaInput>
  }

  export type ClaseCreateWithoutAsistenciaInput = {
    fechaHora: Date | string
    idMateria: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ClaseUncheckedCreateWithoutAsistenciaInput = {
    id?: number
    fechaHora: Date | string
    idMateria: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ClaseCreateOrConnectWithoutAsistenciaInput = {
    where: ClaseWhereUniqueInput
    create: XOR<ClaseCreateWithoutAsistenciaInput, ClaseUncheckedCreateWithoutAsistenciaInput>
  }

  export type AlumnoUpsertWithoutAsistenciaInput = {
    update: XOR<AlumnoUpdateWithoutAsistenciaInput, AlumnoUncheckedUpdateWithoutAsistenciaInput>
    create: XOR<AlumnoCreateWithoutAsistenciaInput, AlumnoUncheckedCreateWithoutAsistenciaInput>
    where?: AlumnoWhereInput
  }

  export type AlumnoUpdateToOneWithWhereWithoutAsistenciaInput = {
    where?: AlumnoWhereInput
    data: XOR<AlumnoUpdateWithoutAsistenciaInput, AlumnoUncheckedUpdateWithoutAsistenciaInput>
  }

  export type AlumnoUpdateWithoutAsistenciaInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: CursoUpdateManyWithoutAlumnosNestedInput
  }

  export type AlumnoUncheckedUpdateWithoutAsistenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: CursoUncheckedUpdateManyWithoutAlumnosNestedInput
  }

  export type ClaseUpsertWithoutAsistenciaInput = {
    update: XOR<ClaseUpdateWithoutAsistenciaInput, ClaseUncheckedUpdateWithoutAsistenciaInput>
    create: XOR<ClaseCreateWithoutAsistenciaInput, ClaseUncheckedCreateWithoutAsistenciaInput>
    where?: ClaseWhereInput
  }

  export type ClaseUpdateToOneWithWhereWithoutAsistenciaInput = {
    where?: ClaseWhereInput
    data: XOR<ClaseUpdateWithoutAsistenciaInput, ClaseUncheckedUpdateWithoutAsistenciaInput>
  }

  export type ClaseUpdateWithoutAsistenciaInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    idMateria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClaseUncheckedUpdateWithoutAsistenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    idMateria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RolesCreateWithoutUserDocenteInput = {
    nombre: string
    descripcion: string
  }

  export type RolesUncheckedCreateWithoutUserDocenteInput = {
    id?: number
    nombre: string
    descripcion: string
  }

  export type RolesCreateOrConnectWithoutUserDocenteInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutUserDocenteInput, RolesUncheckedCreateWithoutUserDocenteInput>
  }

  export type MateriaCreateWithoutUserDocenteInput = {
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    curso: CursoCreateNestedOneWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutUserDocenteInput = {
    id?: number
    nombre: string
    idCurso: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MateriaCreateOrConnectWithoutUserDocenteInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutUserDocenteInput, MateriaUncheckedCreateWithoutUserDocenteInput>
  }

  export type MateriaCreateManyUserDocenteInputEnvelope = {
    data: MateriaCreateManyUserDocenteInput | MateriaCreateManyUserDocenteInput[]
    skipDuplicates?: boolean
  }

  export type RolesUpsertWithoutUserDocenteInput = {
    update: XOR<RolesUpdateWithoutUserDocenteInput, RolesUncheckedUpdateWithoutUserDocenteInput>
    create: XOR<RolesCreateWithoutUserDocenteInput, RolesUncheckedCreateWithoutUserDocenteInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutUserDocenteInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutUserDocenteInput, RolesUncheckedUpdateWithoutUserDocenteInput>
  }

  export type RolesUpdateWithoutUserDocenteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type RolesUncheckedUpdateWithoutUserDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaUpsertWithWhereUniqueWithoutUserDocenteInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutUserDocenteInput, MateriaUncheckedUpdateWithoutUserDocenteInput>
    create: XOR<MateriaCreateWithoutUserDocenteInput, MateriaUncheckedCreateWithoutUserDocenteInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutUserDocenteInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutUserDocenteInput, MateriaUncheckedUpdateWithoutUserDocenteInput>
  }

  export type MateriaUpdateManyWithWhereWithoutUserDocenteInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutUserDocenteInput>
  }

  export type MateriaScalarWhereInput = {
    AND?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    OR?: MateriaScalarWhereInput[]
    NOT?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    id?: IntFilter<"Materia"> | number
    nombre?: StringFilter<"Materia"> | string
    idUserDocente?: IntFilter<"Materia"> | number
    idCurso?: IntFilter<"Materia"> | number
    createdAt?: DateTimeFilter<"Materia"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Materia"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Materia"> | Date | string | null
  }

  export type UserDocenteCreateWithoutRolInput = {
    email: string
    password: string
    nombre: string
    apellido: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materia?: MateriaCreateNestedManyWithoutUserDocenteInput
  }

  export type UserDocenteUncheckedCreateWithoutRolInput = {
    id?: number
    email: string
    password: string
    nombre: string
    apellido: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materia?: MateriaUncheckedCreateNestedManyWithoutUserDocenteInput
  }

  export type UserDocenteCreateOrConnectWithoutRolInput = {
    where: UserDocenteWhereUniqueInput
    create: XOR<UserDocenteCreateWithoutRolInput, UserDocenteUncheckedCreateWithoutRolInput>
  }

  export type UserDocenteCreateManyRolInputEnvelope = {
    data: UserDocenteCreateManyRolInput | UserDocenteCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UserDocenteUpsertWithWhereUniqueWithoutRolInput = {
    where: UserDocenteWhereUniqueInput
    update: XOR<UserDocenteUpdateWithoutRolInput, UserDocenteUncheckedUpdateWithoutRolInput>
    create: XOR<UserDocenteCreateWithoutRolInput, UserDocenteUncheckedCreateWithoutRolInput>
  }

  export type UserDocenteUpdateWithWhereUniqueWithoutRolInput = {
    where: UserDocenteWhereUniqueInput
    data: XOR<UserDocenteUpdateWithoutRolInput, UserDocenteUncheckedUpdateWithoutRolInput>
  }

  export type UserDocenteUpdateManyWithWhereWithoutRolInput = {
    where: UserDocenteScalarWhereInput
    data: XOR<UserDocenteUpdateManyMutationInput, UserDocenteUncheckedUpdateManyWithoutRolInput>
  }

  export type UserDocenteScalarWhereInput = {
    AND?: UserDocenteScalarWhereInput | UserDocenteScalarWhereInput[]
    OR?: UserDocenteScalarWhereInput[]
    NOT?: UserDocenteScalarWhereInput | UserDocenteScalarWhereInput[]
    id?: IntFilter<"UserDocente"> | number
    email?: StringFilter<"UserDocente"> | string
    password?: StringFilter<"UserDocente"> | string
    nombre?: StringFilter<"UserDocente"> | string
    apellido?: StringFilter<"UserDocente"> | string
    idRol?: IntFilter<"UserDocente"> | number
    createdAt?: DateTimeFilter<"UserDocente"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserDocente"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserDocente"> | Date | string | null
  }

  export type UserDocenteCreateWithoutMateriaInput = {
    email: string
    password: string
    nombre: string
    apellido: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    rol: RolesCreateNestedOneWithoutUserDocenteInput
  }

  export type UserDocenteUncheckedCreateWithoutMateriaInput = {
    id?: number
    email: string
    password: string
    nombre: string
    apellido: string
    idRol: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserDocenteCreateOrConnectWithoutMateriaInput = {
    where: UserDocenteWhereUniqueInput
    create: XOR<UserDocenteCreateWithoutMateriaInput, UserDocenteUncheckedCreateWithoutMateriaInput>
  }

  export type CursoCreateWithoutMateriaInput = {
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    alumnos?: AlumnoCreateNestedManyWithoutCursosInput
  }

  export type CursoUncheckedCreateWithoutMateriaInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    alumnos?: AlumnoUncheckedCreateNestedManyWithoutCursosInput
  }

  export type CursoCreateOrConnectWithoutMateriaInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutMateriaInput, CursoUncheckedCreateWithoutMateriaInput>
  }

  export type UserDocenteUpsertWithoutMateriaInput = {
    update: XOR<UserDocenteUpdateWithoutMateriaInput, UserDocenteUncheckedUpdateWithoutMateriaInput>
    create: XOR<UserDocenteCreateWithoutMateriaInput, UserDocenteUncheckedCreateWithoutMateriaInput>
    where?: UserDocenteWhereInput
  }

  export type UserDocenteUpdateToOneWithWhereWithoutMateriaInput = {
    where?: UserDocenteWhereInput
    data: XOR<UserDocenteUpdateWithoutMateriaInput, UserDocenteUncheckedUpdateWithoutMateriaInput>
  }

  export type UserDocenteUpdateWithoutMateriaInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: RolesUpdateOneRequiredWithoutUserDocenteNestedInput
  }

  export type UserDocenteUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    idRol?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CursoUpsertWithoutMateriaInput = {
    update: XOR<CursoUpdateWithoutMateriaInput, CursoUncheckedUpdateWithoutMateriaInput>
    create: XOR<CursoCreateWithoutMateriaInput, CursoUncheckedCreateWithoutMateriaInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutMateriaInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutMateriaInput, CursoUncheckedUpdateWithoutMateriaInput>
  }

  export type CursoUpdateWithoutMateriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alumnos?: AlumnoUpdateManyWithoutCursosNestedInput
  }

  export type CursoUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alumnos?: AlumnoUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type MateriaCreateWithoutCursoInput = {
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    userDocente: UserDocenteCreateNestedOneWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutCursoInput = {
    id?: number
    nombre: string
    idUserDocente: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MateriaCreateOrConnectWithoutCursoInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutCursoInput, MateriaUncheckedCreateWithoutCursoInput>
  }

  export type MateriaCreateManyCursoInputEnvelope = {
    data: MateriaCreateManyCursoInput | MateriaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type AlumnoCreateWithoutCursosInput = {
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencia?: AsistenciaCreateNestedManyWithoutAlumnoInput
  }

  export type AlumnoUncheckedCreateWithoutCursosInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencia?: AsistenciaUncheckedCreateNestedManyWithoutAlumnoInput
  }

  export type AlumnoCreateOrConnectWithoutCursosInput = {
    where: AlumnoWhereUniqueInput
    create: XOR<AlumnoCreateWithoutCursosInput, AlumnoUncheckedCreateWithoutCursosInput>
  }

  export type MateriaUpsertWithWhereUniqueWithoutCursoInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutCursoInput, MateriaUncheckedUpdateWithoutCursoInput>
    create: XOR<MateriaCreateWithoutCursoInput, MateriaUncheckedCreateWithoutCursoInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutCursoInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutCursoInput, MateriaUncheckedUpdateWithoutCursoInput>
  }

  export type MateriaUpdateManyWithWhereWithoutCursoInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutCursoInput>
  }

  export type AlumnoUpsertWithWhereUniqueWithoutCursosInput = {
    where: AlumnoWhereUniqueInput
    update: XOR<AlumnoUpdateWithoutCursosInput, AlumnoUncheckedUpdateWithoutCursosInput>
    create: XOR<AlumnoCreateWithoutCursosInput, AlumnoUncheckedCreateWithoutCursosInput>
  }

  export type AlumnoUpdateWithWhereUniqueWithoutCursosInput = {
    where: AlumnoWhereUniqueInput
    data: XOR<AlumnoUpdateWithoutCursosInput, AlumnoUncheckedUpdateWithoutCursosInput>
  }

  export type AlumnoUpdateManyWithWhereWithoutCursosInput = {
    where: AlumnoScalarWhereInput
    data: XOR<AlumnoUpdateManyMutationInput, AlumnoUncheckedUpdateManyWithoutCursosInput>
  }

  export type AlumnoScalarWhereInput = {
    AND?: AlumnoScalarWhereInput | AlumnoScalarWhereInput[]
    OR?: AlumnoScalarWhereInput[]
    NOT?: AlumnoScalarWhereInput | AlumnoScalarWhereInput[]
    id?: IntFilter<"Alumno"> | number
    legajo?: StringFilter<"Alumno"> | string
    nombre?: StringFilter<"Alumno"> | string
    apellido?: StringFilter<"Alumno"> | string
    celular?: StringFilter<"Alumno"> | string
    createdAt?: DateTimeFilter<"Alumno"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Alumno"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Alumno"> | Date | string | null
  }

  export type AsistenciaCreateManyAlumnoInput = {
    id?: number
    idClase: number
    estado: $Enums.Estado
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AsistenciaUpdateWithoutAlumnoInput = {
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clase?: ClaseUpdateOneRequiredWithoutAsistenciaNestedInput
  }

  export type AsistenciaUncheckedUpdateWithoutAlumnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idClase?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsistenciaUncheckedUpdateManyWithoutAlumnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idClase?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CursoUpdateWithoutAlumnosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materia?: MateriaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutAlumnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materia?: MateriaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateManyWithoutAlumnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsistenciaCreateManyClaseInput = {
    id?: number
    idAlumno: number
    estado: $Enums.Estado
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AsistenciaUpdateWithoutClaseInput = {
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alumno?: AlumnoUpdateOneRequiredWithoutAsistenciaNestedInput
  }

  export type AsistenciaUncheckedUpdateWithoutClaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAlumno?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsistenciaUncheckedUpdateManyWithoutClaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAlumno?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MateriaCreateManyUserDocenteInput = {
    id?: number
    nombre: string
    idCurso: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MateriaUpdateWithoutUserDocenteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curso?: CursoUpdateOneRequiredWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutUserDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idCurso?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MateriaUncheckedUpdateManyWithoutUserDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idCurso?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDocenteCreateManyRolInput = {
    id?: number
    email: string
    password: string
    nombre: string
    apellido: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserDocenteUpdateWithoutRolInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materia?: MateriaUpdateManyWithoutUserDocenteNestedInput
  }

  export type UserDocenteUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materia?: MateriaUncheckedUpdateManyWithoutUserDocenteNestedInput
  }

  export type UserDocenteUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MateriaCreateManyCursoInput = {
    id?: number
    nombre: string
    idUserDocente: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MateriaUpdateWithoutCursoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userDocente?: UserDocenteUpdateOneRequiredWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idUserDocente?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MateriaUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idUserDocente?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlumnoUpdateWithoutCursosInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencia?: AsistenciaUpdateManyWithoutAlumnoNestedInput
  }

  export type AlumnoUncheckedUpdateWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencia?: AsistenciaUncheckedUpdateManyWithoutAlumnoNestedInput
  }

  export type AlumnoUncheckedUpdateManyWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}