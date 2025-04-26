
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
 * Model Alumnos
 * 
 */
export type Alumnos = $Result.DefaultSelection<Prisma.$AlumnosPayload>
/**
 * Model Clases
 * 
 */
export type Clases = $Result.DefaultSelection<Prisma.$ClasesPayload>
/**
 * Model Asistencias
 * 
 */
export type Asistencias = $Result.DefaultSelection<Prisma.$AsistenciasPayload>
/**
 * Model UsersDocentes
 * 
 */
export type UsersDocentes = $Result.DefaultSelection<Prisma.$UsersDocentesPayload>
/**
 * Model Materias
 * 
 */
export type Materias = $Result.DefaultSelection<Prisma.$MateriasPayload>
/**
 * Model DiasHorariosClases
 * 
 */
export type DiasHorariosClases = $Result.DefaultSelection<Prisma.$DiasHorariosClasesPayload>
/**
 * Model Cursos
 * 
 */
export type Cursos = $Result.DefaultSelection<Prisma.$CursosPayload>
/**
 * Model FechaNoLectivas
 * 
 */
export type FechaNoLectivas = $Result.DefaultSelection<Prisma.$FechaNoLectivasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Dias: {
  LUNES: 'LUNES',
  MARTES: 'MARTES',
  MIÉRCOLES: 'MIÉRCOLES',
  JUEVES: 'JUEVES',
  VIERNES: 'VIERNES',
  SÁBADO: 'SÁBADO',
  DOMINGO: 'DOMINGO'
};

export type Dias = (typeof Dias)[keyof typeof Dias]


export const Estados: {
  PRESENTE: 'PRESENTE',
  AUSENTE: 'AUSENTE',
  JUSTIFICADO: 'JUSTIFICADO'
};

export type Estados = (typeof Estados)[keyof typeof Estados]

}

export type Dias = $Enums.Dias

export const Dias: typeof $Enums.Dias

export type Estados = $Enums.Estados

export const Estados: typeof $Enums.Estados

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alumnos
 * const alumnos = await prisma.alumnos.findMany()
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
   * const alumnos = await prisma.alumnos.findMany()
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
   * `prisma.alumnos`: Exposes CRUD operations for the **Alumnos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alumnos
    * const alumnos = await prisma.alumnos.findMany()
    * ```
    */
  get alumnos(): Prisma.AlumnosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clases`: Exposes CRUD operations for the **Clases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clases
    * const clases = await prisma.clases.findMany()
    * ```
    */
  get clases(): Prisma.ClasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asistencias`: Exposes CRUD operations for the **Asistencias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistencias
    * const asistencias = await prisma.asistencias.findMany()
    * ```
    */
  get asistencias(): Prisma.AsistenciasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersDocentes`: Exposes CRUD operations for the **UsersDocentes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersDocentes
    * const usersDocentes = await prisma.usersDocentes.findMany()
    * ```
    */
  get usersDocentes(): Prisma.UsersDocentesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materias`: Exposes CRUD operations for the **Materias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materias.findMany()
    * ```
    */
  get materias(): Prisma.MateriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diasHorariosClases`: Exposes CRUD operations for the **DiasHorariosClases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiasHorariosClases
    * const diasHorariosClases = await prisma.diasHorariosClases.findMany()
    * ```
    */
  get diasHorariosClases(): Prisma.DiasHorariosClasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cursos`: Exposes CRUD operations for the **Cursos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.cursos.findMany()
    * ```
    */
  get cursos(): Prisma.CursosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fechaNoLectivas`: Exposes CRUD operations for the **FechaNoLectivas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FechaNoLectivas
    * const fechaNoLectivas = await prisma.fechaNoLectivas.findMany()
    * ```
    */
  get fechaNoLectivas(): Prisma.FechaNoLectivasDelegate<ExtArgs, ClientOptions>;
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
    Alumnos: 'Alumnos',
    Clases: 'Clases',
    Asistencias: 'Asistencias',
    UsersDocentes: 'UsersDocentes',
    Materias: 'Materias',
    DiasHorariosClases: 'DiasHorariosClases',
    Cursos: 'Cursos',
    FechaNoLectivas: 'FechaNoLectivas'
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
      modelProps: "alumnos" | "clases" | "asistencias" | "usersDocentes" | "materias" | "diasHorariosClases" | "cursos" | "fechaNoLectivas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Alumnos: {
        payload: Prisma.$AlumnosPayload<ExtArgs>
        fields: Prisma.AlumnosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlumnosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlumnosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>
          }
          findFirst: {
            args: Prisma.AlumnosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlumnosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>
          }
          findMany: {
            args: Prisma.AlumnosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>[]
          }
          create: {
            args: Prisma.AlumnosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>
          }
          createMany: {
            args: Prisma.AlumnosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlumnosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>[]
          }
          delete: {
            args: Prisma.AlumnosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>
          }
          update: {
            args: Prisma.AlumnosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>
          }
          deleteMany: {
            args: Prisma.AlumnosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlumnosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlumnosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>[]
          }
          upsert: {
            args: Prisma.AlumnosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>
          }
          aggregate: {
            args: Prisma.AlumnosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlumnos>
          }
          groupBy: {
            args: Prisma.AlumnosGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlumnosGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlumnosCountArgs<ExtArgs>
            result: $Utils.Optional<AlumnosCountAggregateOutputType> | number
          }
        }
      }
      Clases: {
        payload: Prisma.$ClasesPayload<ExtArgs>
        fields: Prisma.ClasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>
          }
          findFirst: {
            args: Prisma.ClasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>
          }
          findMany: {
            args: Prisma.ClasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>[]
          }
          create: {
            args: Prisma.ClasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>
          }
          createMany: {
            args: Prisma.ClasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>[]
          }
          delete: {
            args: Prisma.ClasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>
          }
          update: {
            args: Prisma.ClasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>
          }
          deleteMany: {
            args: Prisma.ClasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>[]
          }
          upsert: {
            args: Prisma.ClasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>
          }
          aggregate: {
            args: Prisma.ClasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClases>
          }
          groupBy: {
            args: Prisma.ClasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClasesCountArgs<ExtArgs>
            result: $Utils.Optional<ClasesCountAggregateOutputType> | number
          }
        }
      }
      Asistencias: {
        payload: Prisma.$AsistenciasPayload<ExtArgs>
        fields: Prisma.AsistenciasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsistenciasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsistenciasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciasPayload>
          }
          findFirst: {
            args: Prisma.AsistenciasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsistenciasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciasPayload>
          }
          findMany: {
            args: Prisma.AsistenciasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciasPayload>[]
          }
          create: {
            args: Prisma.AsistenciasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciasPayload>
          }
          createMany: {
            args: Prisma.AsistenciasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsistenciasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciasPayload>[]
          }
          delete: {
            args: Prisma.AsistenciasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciasPayload>
          }
          update: {
            args: Prisma.AsistenciasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciasPayload>
          }
          deleteMany: {
            args: Prisma.AsistenciasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsistenciasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsistenciasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciasPayload>[]
          }
          upsert: {
            args: Prisma.AsistenciasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciasPayload>
          }
          aggregate: {
            args: Prisma.AsistenciasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsistencias>
          }
          groupBy: {
            args: Prisma.AsistenciasGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsistenciasGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsistenciasCountArgs<ExtArgs>
            result: $Utils.Optional<AsistenciasCountAggregateOutputType> | number
          }
        }
      }
      UsersDocentes: {
        payload: Prisma.$UsersDocentesPayload<ExtArgs>
        fields: Prisma.UsersDocentesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersDocentesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersDocentesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersDocentesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersDocentesPayload>
          }
          findFirst: {
            args: Prisma.UsersDocentesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersDocentesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersDocentesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersDocentesPayload>
          }
          findMany: {
            args: Prisma.UsersDocentesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersDocentesPayload>[]
          }
          create: {
            args: Prisma.UsersDocentesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersDocentesPayload>
          }
          createMany: {
            args: Prisma.UsersDocentesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersDocentesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersDocentesPayload>[]
          }
          delete: {
            args: Prisma.UsersDocentesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersDocentesPayload>
          }
          update: {
            args: Prisma.UsersDocentesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersDocentesPayload>
          }
          deleteMany: {
            args: Prisma.UsersDocentesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersDocentesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersDocentesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersDocentesPayload>[]
          }
          upsert: {
            args: Prisma.UsersDocentesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersDocentesPayload>
          }
          aggregate: {
            args: Prisma.UsersDocentesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersDocentes>
          }
          groupBy: {
            args: Prisma.UsersDocentesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersDocentesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersDocentesCountArgs<ExtArgs>
            result: $Utils.Optional<UsersDocentesCountAggregateOutputType> | number
          }
        }
      }
      Materias: {
        payload: Prisma.$MateriasPayload<ExtArgs>
        fields: Prisma.MateriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriasPayload>
          }
          findFirst: {
            args: Prisma.MateriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriasPayload>
          }
          findMany: {
            args: Prisma.MateriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriasPayload>[]
          }
          create: {
            args: Prisma.MateriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriasPayload>
          }
          createMany: {
            args: Prisma.MateriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriasPayload>[]
          }
          delete: {
            args: Prisma.MateriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriasPayload>
          }
          update: {
            args: Prisma.MateriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriasPayload>
          }
          deleteMany: {
            args: Prisma.MateriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriasPayload>[]
          }
          upsert: {
            args: Prisma.MateriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriasPayload>
          }
          aggregate: {
            args: Prisma.MateriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterias>
          }
          groupBy: {
            args: Prisma.MateriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriasCountArgs<ExtArgs>
            result: $Utils.Optional<MateriasCountAggregateOutputType> | number
          }
        }
      }
      DiasHorariosClases: {
        payload: Prisma.$DiasHorariosClasesPayload<ExtArgs>
        fields: Prisma.DiasHorariosClasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiasHorariosClasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiasHorariosClasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiasHorariosClasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiasHorariosClasesPayload>
          }
          findFirst: {
            args: Prisma.DiasHorariosClasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiasHorariosClasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiasHorariosClasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiasHorariosClasesPayload>
          }
          findMany: {
            args: Prisma.DiasHorariosClasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiasHorariosClasesPayload>[]
          }
          create: {
            args: Prisma.DiasHorariosClasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiasHorariosClasesPayload>
          }
          createMany: {
            args: Prisma.DiasHorariosClasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiasHorariosClasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiasHorariosClasesPayload>[]
          }
          delete: {
            args: Prisma.DiasHorariosClasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiasHorariosClasesPayload>
          }
          update: {
            args: Prisma.DiasHorariosClasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiasHorariosClasesPayload>
          }
          deleteMany: {
            args: Prisma.DiasHorariosClasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiasHorariosClasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiasHorariosClasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiasHorariosClasesPayload>[]
          }
          upsert: {
            args: Prisma.DiasHorariosClasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiasHorariosClasesPayload>
          }
          aggregate: {
            args: Prisma.DiasHorariosClasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiasHorariosClases>
          }
          groupBy: {
            args: Prisma.DiasHorariosClasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiasHorariosClasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiasHorariosClasesCountArgs<ExtArgs>
            result: $Utils.Optional<DiasHorariosClasesCountAggregateOutputType> | number
          }
        }
      }
      Cursos: {
        payload: Prisma.$CursosPayload<ExtArgs>
        fields: Prisma.CursosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>
          }
          findFirst: {
            args: Prisma.CursosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>
          }
          findMany: {
            args: Prisma.CursosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>[]
          }
          create: {
            args: Prisma.CursosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>
          }
          createMany: {
            args: Prisma.CursosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>[]
          }
          delete: {
            args: Prisma.CursosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>
          }
          update: {
            args: Prisma.CursosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>
          }
          deleteMany: {
            args: Prisma.CursosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CursosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>[]
          }
          upsert: {
            args: Prisma.CursosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursosPayload>
          }
          aggregate: {
            args: Prisma.CursosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCursos>
          }
          groupBy: {
            args: Prisma.CursosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursosGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursosCountArgs<ExtArgs>
            result: $Utils.Optional<CursosCountAggregateOutputType> | number
          }
        }
      }
      FechaNoLectivas: {
        payload: Prisma.$FechaNoLectivasPayload<ExtArgs>
        fields: Prisma.FechaNoLectivasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FechaNoLectivasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaNoLectivasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FechaNoLectivasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaNoLectivasPayload>
          }
          findFirst: {
            args: Prisma.FechaNoLectivasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaNoLectivasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FechaNoLectivasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaNoLectivasPayload>
          }
          findMany: {
            args: Prisma.FechaNoLectivasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaNoLectivasPayload>[]
          }
          create: {
            args: Prisma.FechaNoLectivasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaNoLectivasPayload>
          }
          createMany: {
            args: Prisma.FechaNoLectivasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FechaNoLectivasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaNoLectivasPayload>[]
          }
          delete: {
            args: Prisma.FechaNoLectivasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaNoLectivasPayload>
          }
          update: {
            args: Prisma.FechaNoLectivasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaNoLectivasPayload>
          }
          deleteMany: {
            args: Prisma.FechaNoLectivasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FechaNoLectivasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FechaNoLectivasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaNoLectivasPayload>[]
          }
          upsert: {
            args: Prisma.FechaNoLectivasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaNoLectivasPayload>
          }
          aggregate: {
            args: Prisma.FechaNoLectivasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFechaNoLectivas>
          }
          groupBy: {
            args: Prisma.FechaNoLectivasGroupByArgs<ExtArgs>
            result: $Utils.Optional<FechaNoLectivasGroupByOutputType>[]
          }
          count: {
            args: Prisma.FechaNoLectivasCountArgs<ExtArgs>
            result: $Utils.Optional<FechaNoLectivasCountAggregateOutputType> | number
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
    alumnos?: AlumnosOmit
    clases?: ClasesOmit
    asistencias?: AsistenciasOmit
    usersDocentes?: UsersDocentesOmit
    materias?: MateriasOmit
    diasHorariosClases?: DiasHorariosClasesOmit
    cursos?: CursosOmit
    fechaNoLectivas?: FechaNoLectivasOmit
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
   * Count Type AlumnosCountOutputType
   */

  export type AlumnosCountOutputType = {
    Asistencias: number
    Cursos: number
  }

  export type AlumnosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Asistencias?: boolean | AlumnosCountOutputTypeCountAsistenciasArgs
    Cursos?: boolean | AlumnosCountOutputTypeCountCursosArgs
  }

  // Custom InputTypes
  /**
   * AlumnosCountOutputType without action
   */
  export type AlumnosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnosCountOutputType
     */
    select?: AlumnosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlumnosCountOutputType without action
   */
  export type AlumnosCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciasWhereInput
  }

  /**
   * AlumnosCountOutputType without action
   */
  export type AlumnosCountOutputTypeCountCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursosWhereInput
  }


  /**
   * Count Type ClasesCountOutputType
   */

  export type ClasesCountOutputType = {
    Asistencias: number
  }

  export type ClasesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Asistencias?: boolean | ClasesCountOutputTypeCountAsistenciasArgs
  }

  // Custom InputTypes
  /**
   * ClasesCountOutputType without action
   */
  export type ClasesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClasesCountOutputType
     */
    select?: ClasesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClasesCountOutputType without action
   */
  export type ClasesCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciasWhereInput
  }


  /**
   * Count Type UsersDocentesCountOutputType
   */

  export type UsersDocentesCountOutputType = {
    Materias: number
  }

  export type UsersDocentesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materias?: boolean | UsersDocentesCountOutputTypeCountMateriasArgs
  }

  // Custom InputTypes
  /**
   * UsersDocentesCountOutputType without action
   */
  export type UsersDocentesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentesCountOutputType
     */
    select?: UsersDocentesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersDocentesCountOutputType without action
   */
  export type UsersDocentesCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriasWhereInput
  }


  /**
   * Count Type MateriasCountOutputType
   */

  export type MateriasCountOutputType = {
    Clases: number
    DiasHorariosClases: number
  }

  export type MateriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clases?: boolean | MateriasCountOutputTypeCountClasesArgs
    DiasHorariosClases?: boolean | MateriasCountOutputTypeCountDiasHorariosClasesArgs
  }

  // Custom InputTypes
  /**
   * MateriasCountOutputType without action
   */
  export type MateriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriasCountOutputType
     */
    select?: MateriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriasCountOutputType without action
   */
  export type MateriasCountOutputTypeCountClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClasesWhereInput
  }

  /**
   * MateriasCountOutputType without action
   */
  export type MateriasCountOutputTypeCountDiasHorariosClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiasHorariosClasesWhereInput
  }


  /**
   * Count Type CursosCountOutputType
   */

  export type CursosCountOutputType = {
    Materias: number
    Alumnos: number
  }

  export type CursosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materias?: boolean | CursosCountOutputTypeCountMateriasArgs
    Alumnos?: boolean | CursosCountOutputTypeCountAlumnosArgs
  }

  // Custom InputTypes
  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursosCountOutputType
     */
    select?: CursosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriasWhereInput
  }

  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeCountAlumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Alumnos
   */

  export type AggregateAlumnos = {
    _count: AlumnosCountAggregateOutputType | null
    _avg: AlumnosAvgAggregateOutputType | null
    _sum: AlumnosSumAggregateOutputType | null
    _min: AlumnosMinAggregateOutputType | null
    _max: AlumnosMaxAggregateOutputType | null
  }

  export type AlumnosAvgAggregateOutputType = {
    id: number | null
  }

  export type AlumnosSumAggregateOutputType = {
    id: number | null
  }

  export type AlumnosMinAggregateOutputType = {
    id: number | null
    legajo: string | null
    nombre: string | null
    apellido: string | null
    celular: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AlumnosMaxAggregateOutputType = {
    id: number | null
    legajo: string | null
    nombre: string | null
    apellido: string | null
    celular: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AlumnosCountAggregateOutputType = {
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


  export type AlumnosAvgAggregateInputType = {
    id?: true
  }

  export type AlumnosSumAggregateInputType = {
    id?: true
  }

  export type AlumnosMinAggregateInputType = {
    id?: true
    legajo?: true
    nombre?: true
    apellido?: true
    celular?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AlumnosMaxAggregateInputType = {
    id?: true
    legajo?: true
    nombre?: true
    apellido?: true
    celular?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AlumnosCountAggregateInputType = {
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

  export type AlumnosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alumnos to aggregate.
     */
    where?: AlumnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnosOrderByWithRelationInput | AlumnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlumnosWhereUniqueInput
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
    _count?: true | AlumnosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlumnosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlumnosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlumnosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlumnosMaxAggregateInputType
  }

  export type GetAlumnosAggregateType<T extends AlumnosAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumnos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumnos[P]>
      : GetScalarType<T[P], AggregateAlumnos[P]>
  }




  export type AlumnosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnosWhereInput
    orderBy?: AlumnosOrderByWithAggregationInput | AlumnosOrderByWithAggregationInput[]
    by: AlumnosScalarFieldEnum[] | AlumnosScalarFieldEnum
    having?: AlumnosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlumnosCountAggregateInputType | true
    _avg?: AlumnosAvgAggregateInputType
    _sum?: AlumnosSumAggregateInputType
    _min?: AlumnosMinAggregateInputType
    _max?: AlumnosMaxAggregateInputType
  }

  export type AlumnosGroupByOutputType = {
    id: number
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: AlumnosCountAggregateOutputType | null
    _avg: AlumnosAvgAggregateOutputType | null
    _sum: AlumnosSumAggregateOutputType | null
    _min: AlumnosMinAggregateOutputType | null
    _max: AlumnosMaxAggregateOutputType | null
  }

  type GetAlumnosGroupByPayload<T extends AlumnosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlumnosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlumnosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlumnosGroupByOutputType[P]>
            : GetScalarType<T[P], AlumnosGroupByOutputType[P]>
        }
      >
    >


  export type AlumnosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajo?: boolean
    nombre?: boolean
    apellido?: boolean
    celular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Asistencias?: boolean | Alumnos$AsistenciasArgs<ExtArgs>
    Cursos?: boolean | Alumnos$CursosArgs<ExtArgs>
    _count?: boolean | AlumnosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumnos"]>

  export type AlumnosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajo?: boolean
    nombre?: boolean
    apellido?: boolean
    celular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["alumnos"]>

  export type AlumnosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legajo?: boolean
    nombre?: boolean
    apellido?: boolean
    celular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["alumnos"]>

  export type AlumnosSelectScalar = {
    id?: boolean
    legajo?: boolean
    nombre?: boolean
    apellido?: boolean
    celular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AlumnosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "legajo" | "nombre" | "apellido" | "celular" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["alumnos"]>
  export type AlumnosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Asistencias?: boolean | Alumnos$AsistenciasArgs<ExtArgs>
    Cursos?: boolean | Alumnos$CursosArgs<ExtArgs>
    _count?: boolean | AlumnosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlumnosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlumnosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlumnosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alumnos"
    objects: {
      Asistencias: Prisma.$AsistenciasPayload<ExtArgs>[]
      Cursos: Prisma.$CursosPayload<ExtArgs>[]
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
    }, ExtArgs["result"]["alumnos"]>
    composites: {}
  }

  type AlumnosGetPayload<S extends boolean | null | undefined | AlumnosDefaultArgs> = $Result.GetResult<Prisma.$AlumnosPayload, S>

  type AlumnosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlumnosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlumnosCountAggregateInputType | true
    }

  export interface AlumnosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alumnos'], meta: { name: 'Alumnos' } }
    /**
     * Find zero or one Alumnos that matches the filter.
     * @param {AlumnosFindUniqueArgs} args - Arguments to find a Alumnos
     * @example
     * // Get one Alumnos
     * const alumnos = await prisma.alumnos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlumnosFindUniqueArgs>(args: SelectSubset<T, AlumnosFindUniqueArgs<ExtArgs>>): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alumnos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlumnosFindUniqueOrThrowArgs} args - Arguments to find a Alumnos
     * @example
     * // Get one Alumnos
     * const alumnos = await prisma.alumnos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlumnosFindUniqueOrThrowArgs>(args: SelectSubset<T, AlumnosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alumnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosFindFirstArgs} args - Arguments to find a Alumnos
     * @example
     * // Get one Alumnos
     * const alumnos = await prisma.alumnos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlumnosFindFirstArgs>(args?: SelectSubset<T, AlumnosFindFirstArgs<ExtArgs>>): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alumnos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosFindFirstOrThrowArgs} args - Arguments to find a Alumnos
     * @example
     * // Get one Alumnos
     * const alumnos = await prisma.alumnos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlumnosFindFirstOrThrowArgs>(args?: SelectSubset<T, AlumnosFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alumnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumnos
     * const alumnos = await prisma.alumnos.findMany()
     * 
     * // Get first 10 Alumnos
     * const alumnos = await prisma.alumnos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alumnosWithIdOnly = await prisma.alumnos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlumnosFindManyArgs>(args?: SelectSubset<T, AlumnosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alumnos.
     * @param {AlumnosCreateArgs} args - Arguments to create a Alumnos.
     * @example
     * // Create one Alumnos
     * const Alumnos = await prisma.alumnos.create({
     *   data: {
     *     // ... data to create a Alumnos
     *   }
     * })
     * 
     */
    create<T extends AlumnosCreateArgs>(args: SelectSubset<T, AlumnosCreateArgs<ExtArgs>>): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alumnos.
     * @param {AlumnosCreateManyArgs} args - Arguments to create many Alumnos.
     * @example
     * // Create many Alumnos
     * const alumnos = await prisma.alumnos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlumnosCreateManyArgs>(args?: SelectSubset<T, AlumnosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alumnos and returns the data saved in the database.
     * @param {AlumnosCreateManyAndReturnArgs} args - Arguments to create many Alumnos.
     * @example
     * // Create many Alumnos
     * const alumnos = await prisma.alumnos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alumnos and only return the `id`
     * const alumnosWithIdOnly = await prisma.alumnos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlumnosCreateManyAndReturnArgs>(args?: SelectSubset<T, AlumnosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alumnos.
     * @param {AlumnosDeleteArgs} args - Arguments to delete one Alumnos.
     * @example
     * // Delete one Alumnos
     * const Alumnos = await prisma.alumnos.delete({
     *   where: {
     *     // ... filter to delete one Alumnos
     *   }
     * })
     * 
     */
    delete<T extends AlumnosDeleteArgs>(args: SelectSubset<T, AlumnosDeleteArgs<ExtArgs>>): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alumnos.
     * @param {AlumnosUpdateArgs} args - Arguments to update one Alumnos.
     * @example
     * // Update one Alumnos
     * const alumnos = await prisma.alumnos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlumnosUpdateArgs>(args: SelectSubset<T, AlumnosUpdateArgs<ExtArgs>>): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alumnos.
     * @param {AlumnosDeleteManyArgs} args - Arguments to filter Alumnos to delete.
     * @example
     * // Delete a few Alumnos
     * const { count } = await prisma.alumnos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlumnosDeleteManyArgs>(args?: SelectSubset<T, AlumnosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumnos
     * const alumnos = await prisma.alumnos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlumnosUpdateManyArgs>(args: SelectSubset<T, AlumnosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumnos and returns the data updated in the database.
     * @param {AlumnosUpdateManyAndReturnArgs} args - Arguments to update many Alumnos.
     * @example
     * // Update many Alumnos
     * const alumnos = await prisma.alumnos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alumnos and only return the `id`
     * const alumnosWithIdOnly = await prisma.alumnos.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlumnosUpdateManyAndReturnArgs>(args: SelectSubset<T, AlumnosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alumnos.
     * @param {AlumnosUpsertArgs} args - Arguments to update or create a Alumnos.
     * @example
     * // Update or create a Alumnos
     * const alumnos = await prisma.alumnos.upsert({
     *   create: {
     *     // ... data to create a Alumnos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumnos we want to update
     *   }
     * })
     */
    upsert<T extends AlumnosUpsertArgs>(args: SelectSubset<T, AlumnosUpsertArgs<ExtArgs>>): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosCountArgs} args - Arguments to filter Alumnos to count.
     * @example
     * // Count the number of Alumnos
     * const count = await prisma.alumnos.count({
     *   where: {
     *     // ... the filter for the Alumnos we want to count
     *   }
     * })
    **/
    count<T extends AlumnosCountArgs>(
      args?: Subset<T, AlumnosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlumnosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlumnosAggregateArgs>(args: Subset<T, AlumnosAggregateArgs>): Prisma.PrismaPromise<GetAlumnosAggregateType<T>>

    /**
     * Group by Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosGroupByArgs} args - Group by arguments.
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
      T extends AlumnosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlumnosGroupByArgs['orderBy'] }
        : { orderBy?: AlumnosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlumnosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alumnos model
   */
  readonly fields: AlumnosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alumnos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlumnosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Asistencias<T extends Alumnos$AsistenciasArgs<ExtArgs> = {}>(args?: Subset<T, Alumnos$AsistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cursos<T extends Alumnos$CursosArgs<ExtArgs> = {}>(args?: Subset<T, Alumnos$CursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Alumnos model
   */
  interface AlumnosFieldRefs {
    readonly id: FieldRef<"Alumnos", 'Int'>
    readonly legajo: FieldRef<"Alumnos", 'String'>
    readonly nombre: FieldRef<"Alumnos", 'String'>
    readonly apellido: FieldRef<"Alumnos", 'String'>
    readonly celular: FieldRef<"Alumnos", 'String'>
    readonly createdAt: FieldRef<"Alumnos", 'DateTime'>
    readonly updatedAt: FieldRef<"Alumnos", 'DateTime'>
    readonly deletedAt: FieldRef<"Alumnos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alumnos findUnique
   */
  export type AlumnosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where: AlumnosWhereUniqueInput
  }

  /**
   * Alumnos findUniqueOrThrow
   */
  export type AlumnosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where: AlumnosWhereUniqueInput
  }

  /**
   * Alumnos findFirst
   */
  export type AlumnosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where?: AlumnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnosOrderByWithRelationInput | AlumnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alumnos.
     */
    cursor?: AlumnosWhereUniqueInput
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
    distinct?: AlumnosScalarFieldEnum | AlumnosScalarFieldEnum[]
  }

  /**
   * Alumnos findFirstOrThrow
   */
  export type AlumnosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where?: AlumnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnosOrderByWithRelationInput | AlumnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alumnos.
     */
    cursor?: AlumnosWhereUniqueInput
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
    distinct?: AlumnosScalarFieldEnum | AlumnosScalarFieldEnum[]
  }

  /**
   * Alumnos findMany
   */
  export type AlumnosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where?: AlumnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnosOrderByWithRelationInput | AlumnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alumnos.
     */
    cursor?: AlumnosWhereUniqueInput
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
    distinct?: AlumnosScalarFieldEnum | AlumnosScalarFieldEnum[]
  }

  /**
   * Alumnos create
   */
  export type AlumnosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * The data needed to create a Alumnos.
     */
    data: XOR<AlumnosCreateInput, AlumnosUncheckedCreateInput>
  }

  /**
   * Alumnos createMany
   */
  export type AlumnosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alumnos.
     */
    data: AlumnosCreateManyInput | AlumnosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alumnos createManyAndReturn
   */
  export type AlumnosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * The data used to create many Alumnos.
     */
    data: AlumnosCreateManyInput | AlumnosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alumnos update
   */
  export type AlumnosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * The data needed to update a Alumnos.
     */
    data: XOR<AlumnosUpdateInput, AlumnosUncheckedUpdateInput>
    /**
     * Choose, which Alumnos to update.
     */
    where: AlumnosWhereUniqueInput
  }

  /**
   * Alumnos updateMany
   */
  export type AlumnosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alumnos.
     */
    data: XOR<AlumnosUpdateManyMutationInput, AlumnosUncheckedUpdateManyInput>
    /**
     * Filter which Alumnos to update
     */
    where?: AlumnosWhereInput
    /**
     * Limit how many Alumnos to update.
     */
    limit?: number
  }

  /**
   * Alumnos updateManyAndReturn
   */
  export type AlumnosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * The data used to update Alumnos.
     */
    data: XOR<AlumnosUpdateManyMutationInput, AlumnosUncheckedUpdateManyInput>
    /**
     * Filter which Alumnos to update
     */
    where?: AlumnosWhereInput
    /**
     * Limit how many Alumnos to update.
     */
    limit?: number
  }

  /**
   * Alumnos upsert
   */
  export type AlumnosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * The filter to search for the Alumnos to update in case it exists.
     */
    where: AlumnosWhereUniqueInput
    /**
     * In case the Alumnos found by the `where` argument doesn't exist, create a new Alumnos with this data.
     */
    create: XOR<AlumnosCreateInput, AlumnosUncheckedCreateInput>
    /**
     * In case the Alumnos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlumnosUpdateInput, AlumnosUncheckedUpdateInput>
  }

  /**
   * Alumnos delete
   */
  export type AlumnosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * Filter which Alumnos to delete.
     */
    where: AlumnosWhereUniqueInput
  }

  /**
   * Alumnos deleteMany
   */
  export type AlumnosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alumnos to delete
     */
    where?: AlumnosWhereInput
    /**
     * Limit how many Alumnos to delete.
     */
    limit?: number
  }

  /**
   * Alumnos.Asistencias
   */
  export type Alumnos$AsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasInclude<ExtArgs> | null
    where?: AsistenciasWhereInput
    orderBy?: AsistenciasOrderByWithRelationInput | AsistenciasOrderByWithRelationInput[]
    cursor?: AsistenciasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciasScalarFieldEnum | AsistenciasScalarFieldEnum[]
  }

  /**
   * Alumnos.Cursos
   */
  export type Alumnos$CursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    where?: CursosWhereInput
    orderBy?: CursosOrderByWithRelationInput | CursosOrderByWithRelationInput[]
    cursor?: CursosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * Alumnos without action
   */
  export type AlumnosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnosInclude<ExtArgs> | null
  }


  /**
   * Model Clases
   */

  export type AggregateClases = {
    _count: ClasesCountAggregateOutputType | null
    _avg: ClasesAvgAggregateOutputType | null
    _sum: ClasesSumAggregateOutputType | null
    _min: ClasesMinAggregateOutputType | null
    _max: ClasesMaxAggregateOutputType | null
  }

  export type ClasesAvgAggregateOutputType = {
    id: number | null
    idMateria: number | null
  }

  export type ClasesSumAggregateOutputType = {
    id: number | null
    idMateria: number | null
  }

  export type ClasesMinAggregateOutputType = {
    id: number | null
    fechaHora: Date | null
    idMateria: number | null
    suspendida: boolean | null
    motivo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ClasesMaxAggregateOutputType = {
    id: number | null
    fechaHora: Date | null
    idMateria: number | null
    suspendida: boolean | null
    motivo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ClasesCountAggregateOutputType = {
    id: number
    fechaHora: number
    idMateria: number
    suspendida: number
    motivo: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ClasesAvgAggregateInputType = {
    id?: true
    idMateria?: true
  }

  export type ClasesSumAggregateInputType = {
    id?: true
    idMateria?: true
  }

  export type ClasesMinAggregateInputType = {
    id?: true
    fechaHora?: true
    idMateria?: true
    suspendida?: true
    motivo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ClasesMaxAggregateInputType = {
    id?: true
    fechaHora?: true
    idMateria?: true
    suspendida?: true
    motivo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ClasesCountAggregateInputType = {
    id?: true
    fechaHora?: true
    idMateria?: true
    suspendida?: true
    motivo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ClasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clases to aggregate.
     */
    where?: ClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClasesOrderByWithRelationInput | ClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClasesWhereUniqueInput
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
    _count?: true | ClasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClasesMaxAggregateInputType
  }

  export type GetClasesAggregateType<T extends ClasesAggregateArgs> = {
        [P in keyof T & keyof AggregateClases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClases[P]>
      : GetScalarType<T[P], AggregateClases[P]>
  }




  export type ClasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClasesWhereInput
    orderBy?: ClasesOrderByWithAggregationInput | ClasesOrderByWithAggregationInput[]
    by: ClasesScalarFieldEnum[] | ClasesScalarFieldEnum
    having?: ClasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClasesCountAggregateInputType | true
    _avg?: ClasesAvgAggregateInputType
    _sum?: ClasesSumAggregateInputType
    _min?: ClasesMinAggregateInputType
    _max?: ClasesMaxAggregateInputType
  }

  export type ClasesGroupByOutputType = {
    id: number
    fechaHora: Date
    idMateria: number
    suspendida: boolean
    motivo: string | null
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: ClasesCountAggregateOutputType | null
    _avg: ClasesAvgAggregateOutputType | null
    _sum: ClasesSumAggregateOutputType | null
    _min: ClasesMinAggregateOutputType | null
    _max: ClasesMaxAggregateOutputType | null
  }

  type GetClasesGroupByPayload<T extends ClasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClasesGroupByOutputType[P]>
            : GetScalarType<T[P], ClasesGroupByOutputType[P]>
        }
      >
    >


  export type ClasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaHora?: boolean
    idMateria?: boolean
    suspendida?: boolean
    motivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    materia?: boolean | MateriasDefaultArgs<ExtArgs>
    Asistencias?: boolean | Clases$AsistenciasArgs<ExtArgs>
    _count?: boolean | ClasesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clases"]>

  export type ClasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaHora?: boolean
    idMateria?: boolean
    suspendida?: boolean
    motivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    materia?: boolean | MateriasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clases"]>

  export type ClasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaHora?: boolean
    idMateria?: boolean
    suspendida?: boolean
    motivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    materia?: boolean | MateriasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clases"]>

  export type ClasesSelectScalar = {
    id?: boolean
    fechaHora?: boolean
    idMateria?: boolean
    suspendida?: boolean
    motivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ClasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaHora" | "idMateria" | "suspendida" | "motivo" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["clases"]>
  export type ClasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | MateriasDefaultArgs<ExtArgs>
    Asistencias?: boolean | Clases$AsistenciasArgs<ExtArgs>
    _count?: boolean | ClasesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | MateriasDefaultArgs<ExtArgs>
  }
  export type ClasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | MateriasDefaultArgs<ExtArgs>
  }

  export type $ClasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clases"
    objects: {
      materia: Prisma.$MateriasPayload<ExtArgs>
      Asistencias: Prisma.$AsistenciasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaHora: Date
      idMateria: number
      suspendida: boolean
      motivo: string | null
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["clases"]>
    composites: {}
  }

  type ClasesGetPayload<S extends boolean | null | undefined | ClasesDefaultArgs> = $Result.GetResult<Prisma.$ClasesPayload, S>

  type ClasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClasesCountAggregateInputType | true
    }

  export interface ClasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clases'], meta: { name: 'Clases' } }
    /**
     * Find zero or one Clases that matches the filter.
     * @param {ClasesFindUniqueArgs} args - Arguments to find a Clases
     * @example
     * // Get one Clases
     * const clases = await prisma.clases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClasesFindUniqueArgs>(args: SelectSubset<T, ClasesFindUniqueArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClasesFindUniqueOrThrowArgs} args - Arguments to find a Clases
     * @example
     * // Get one Clases
     * const clases = await prisma.clases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClasesFindUniqueOrThrowArgs>(args: SelectSubset<T, ClasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesFindFirstArgs} args - Arguments to find a Clases
     * @example
     * // Get one Clases
     * const clases = await prisma.clases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClasesFindFirstArgs>(args?: SelectSubset<T, ClasesFindFirstArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesFindFirstOrThrowArgs} args - Arguments to find a Clases
     * @example
     * // Get one Clases
     * const clases = await prisma.clases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClasesFindFirstOrThrowArgs>(args?: SelectSubset<T, ClasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clases
     * const clases = await prisma.clases.findMany()
     * 
     * // Get first 10 Clases
     * const clases = await prisma.clases.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clasesWithIdOnly = await prisma.clases.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClasesFindManyArgs>(args?: SelectSubset<T, ClasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clases.
     * @param {ClasesCreateArgs} args - Arguments to create a Clases.
     * @example
     * // Create one Clases
     * const Clases = await prisma.clases.create({
     *   data: {
     *     // ... data to create a Clases
     *   }
     * })
     * 
     */
    create<T extends ClasesCreateArgs>(args: SelectSubset<T, ClasesCreateArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clases.
     * @param {ClasesCreateManyArgs} args - Arguments to create many Clases.
     * @example
     * // Create many Clases
     * const clases = await prisma.clases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClasesCreateManyArgs>(args?: SelectSubset<T, ClasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clases and returns the data saved in the database.
     * @param {ClasesCreateManyAndReturnArgs} args - Arguments to create many Clases.
     * @example
     * // Create many Clases
     * const clases = await prisma.clases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clases and only return the `id`
     * const clasesWithIdOnly = await prisma.clases.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClasesCreateManyAndReturnArgs>(args?: SelectSubset<T, ClasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clases.
     * @param {ClasesDeleteArgs} args - Arguments to delete one Clases.
     * @example
     * // Delete one Clases
     * const Clases = await prisma.clases.delete({
     *   where: {
     *     // ... filter to delete one Clases
     *   }
     * })
     * 
     */
    delete<T extends ClasesDeleteArgs>(args: SelectSubset<T, ClasesDeleteArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clases.
     * @param {ClasesUpdateArgs} args - Arguments to update one Clases.
     * @example
     * // Update one Clases
     * const clases = await prisma.clases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClasesUpdateArgs>(args: SelectSubset<T, ClasesUpdateArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clases.
     * @param {ClasesDeleteManyArgs} args - Arguments to filter Clases to delete.
     * @example
     * // Delete a few Clases
     * const { count } = await prisma.clases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClasesDeleteManyArgs>(args?: SelectSubset<T, ClasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clases
     * const clases = await prisma.clases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClasesUpdateManyArgs>(args: SelectSubset<T, ClasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clases and returns the data updated in the database.
     * @param {ClasesUpdateManyAndReturnArgs} args - Arguments to update many Clases.
     * @example
     * // Update many Clases
     * const clases = await prisma.clases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clases and only return the `id`
     * const clasesWithIdOnly = await prisma.clases.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClasesUpdateManyAndReturnArgs>(args: SelectSubset<T, ClasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clases.
     * @param {ClasesUpsertArgs} args - Arguments to update or create a Clases.
     * @example
     * // Update or create a Clases
     * const clases = await prisma.clases.upsert({
     *   create: {
     *     // ... data to create a Clases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clases we want to update
     *   }
     * })
     */
    upsert<T extends ClasesUpsertArgs>(args: SelectSubset<T, ClasesUpsertArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesCountArgs} args - Arguments to filter Clases to count.
     * @example
     * // Count the number of Clases
     * const count = await prisma.clases.count({
     *   where: {
     *     // ... the filter for the Clases we want to count
     *   }
     * })
    **/
    count<T extends ClasesCountArgs>(
      args?: Subset<T, ClasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClasesAggregateArgs>(args: Subset<T, ClasesAggregateArgs>): Prisma.PrismaPromise<GetClasesAggregateType<T>>

    /**
     * Group by Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesGroupByArgs} args - Group by arguments.
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
      T extends ClasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClasesGroupByArgs['orderBy'] }
        : { orderBy?: ClasesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clases model
   */
  readonly fields: ClasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materia<T extends MateriasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriasDefaultArgs<ExtArgs>>): Prisma__MateriasClient<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Asistencias<T extends Clases$AsistenciasArgs<ExtArgs> = {}>(args?: Subset<T, Clases$AsistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Clases model
   */
  interface ClasesFieldRefs {
    readonly id: FieldRef<"Clases", 'Int'>
    readonly fechaHora: FieldRef<"Clases", 'DateTime'>
    readonly idMateria: FieldRef<"Clases", 'Int'>
    readonly suspendida: FieldRef<"Clases", 'Boolean'>
    readonly motivo: FieldRef<"Clases", 'String'>
    readonly createdAt: FieldRef<"Clases", 'DateTime'>
    readonly updatedAt: FieldRef<"Clases", 'DateTime'>
    readonly deletedAt: FieldRef<"Clases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clases findUnique
   */
  export type ClasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where: ClasesWhereUniqueInput
  }

  /**
   * Clases findUniqueOrThrow
   */
  export type ClasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where: ClasesWhereUniqueInput
  }

  /**
   * Clases findFirst
   */
  export type ClasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where?: ClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClasesOrderByWithRelationInput | ClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clases.
     */
    cursor?: ClasesWhereUniqueInput
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
    distinct?: ClasesScalarFieldEnum | ClasesScalarFieldEnum[]
  }

  /**
   * Clases findFirstOrThrow
   */
  export type ClasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where?: ClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClasesOrderByWithRelationInput | ClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clases.
     */
    cursor?: ClasesWhereUniqueInput
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
    distinct?: ClasesScalarFieldEnum | ClasesScalarFieldEnum[]
  }

  /**
   * Clases findMany
   */
  export type ClasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where?: ClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClasesOrderByWithRelationInput | ClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clases.
     */
    cursor?: ClasesWhereUniqueInput
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
    distinct?: ClasesScalarFieldEnum | ClasesScalarFieldEnum[]
  }

  /**
   * Clases create
   */
  export type ClasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * The data needed to create a Clases.
     */
    data: XOR<ClasesCreateInput, ClasesUncheckedCreateInput>
  }

  /**
   * Clases createMany
   */
  export type ClasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clases.
     */
    data: ClasesCreateManyInput | ClasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clases createManyAndReturn
   */
  export type ClasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * The data used to create many Clases.
     */
    data: ClasesCreateManyInput | ClasesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clases update
   */
  export type ClasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * The data needed to update a Clases.
     */
    data: XOR<ClasesUpdateInput, ClasesUncheckedUpdateInput>
    /**
     * Choose, which Clases to update.
     */
    where: ClasesWhereUniqueInput
  }

  /**
   * Clases updateMany
   */
  export type ClasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clases.
     */
    data: XOR<ClasesUpdateManyMutationInput, ClasesUncheckedUpdateManyInput>
    /**
     * Filter which Clases to update
     */
    where?: ClasesWhereInput
    /**
     * Limit how many Clases to update.
     */
    limit?: number
  }

  /**
   * Clases updateManyAndReturn
   */
  export type ClasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * The data used to update Clases.
     */
    data: XOR<ClasesUpdateManyMutationInput, ClasesUncheckedUpdateManyInput>
    /**
     * Filter which Clases to update
     */
    where?: ClasesWhereInput
    /**
     * Limit how many Clases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clases upsert
   */
  export type ClasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * The filter to search for the Clases to update in case it exists.
     */
    where: ClasesWhereUniqueInput
    /**
     * In case the Clases found by the `where` argument doesn't exist, create a new Clases with this data.
     */
    create: XOR<ClasesCreateInput, ClasesUncheckedCreateInput>
    /**
     * In case the Clases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClasesUpdateInput, ClasesUncheckedUpdateInput>
  }

  /**
   * Clases delete
   */
  export type ClasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * Filter which Clases to delete.
     */
    where: ClasesWhereUniqueInput
  }

  /**
   * Clases deleteMany
   */
  export type ClasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clases to delete
     */
    where?: ClasesWhereInput
    /**
     * Limit how many Clases to delete.
     */
    limit?: number
  }

  /**
   * Clases.Asistencias
   */
  export type Clases$AsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasInclude<ExtArgs> | null
    where?: AsistenciasWhereInput
    orderBy?: AsistenciasOrderByWithRelationInput | AsistenciasOrderByWithRelationInput[]
    cursor?: AsistenciasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciasScalarFieldEnum | AsistenciasScalarFieldEnum[]
  }

  /**
   * Clases without action
   */
  export type ClasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
  }


  /**
   * Model Asistencias
   */

  export type AggregateAsistencias = {
    _count: AsistenciasCountAggregateOutputType | null
    _avg: AsistenciasAvgAggregateOutputType | null
    _sum: AsistenciasSumAggregateOutputType | null
    _min: AsistenciasMinAggregateOutputType | null
    _max: AsistenciasMaxAggregateOutputType | null
  }

  export type AsistenciasAvgAggregateOutputType = {
    id: number | null
    idAlumno: number | null
    idClase: number | null
  }

  export type AsistenciasSumAggregateOutputType = {
    id: number | null
    idAlumno: number | null
    idClase: number | null
  }

  export type AsistenciasMinAggregateOutputType = {
    id: number | null
    idAlumno: number | null
    idClase: number | null
    estado: $Enums.Estados | null
    nota: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AsistenciasMaxAggregateOutputType = {
    id: number | null
    idAlumno: number | null
    idClase: number | null
    estado: $Enums.Estados | null
    nota: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AsistenciasCountAggregateOutputType = {
    id: number
    idAlumno: number
    idClase: number
    estado: number
    nota: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AsistenciasAvgAggregateInputType = {
    id?: true
    idAlumno?: true
    idClase?: true
  }

  export type AsistenciasSumAggregateInputType = {
    id?: true
    idAlumno?: true
    idClase?: true
  }

  export type AsistenciasMinAggregateInputType = {
    id?: true
    idAlumno?: true
    idClase?: true
    estado?: true
    nota?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AsistenciasMaxAggregateInputType = {
    id?: true
    idAlumno?: true
    idClase?: true
    estado?: true
    nota?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AsistenciasCountAggregateInputType = {
    id?: true
    idAlumno?: true
    idClase?: true
    estado?: true
    nota?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AsistenciasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asistencias to aggregate.
     */
    where?: AsistenciasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciasOrderByWithRelationInput | AsistenciasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsistenciasWhereUniqueInput
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
    _count?: true | AsistenciasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsistenciasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsistenciasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsistenciasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsistenciasMaxAggregateInputType
  }

  export type GetAsistenciasAggregateType<T extends AsistenciasAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistencias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistencias[P]>
      : GetScalarType<T[P], AggregateAsistencias[P]>
  }




  export type AsistenciasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciasWhereInput
    orderBy?: AsistenciasOrderByWithAggregationInput | AsistenciasOrderByWithAggregationInput[]
    by: AsistenciasScalarFieldEnum[] | AsistenciasScalarFieldEnum
    having?: AsistenciasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsistenciasCountAggregateInputType | true
    _avg?: AsistenciasAvgAggregateInputType
    _sum?: AsistenciasSumAggregateInputType
    _min?: AsistenciasMinAggregateInputType
    _max?: AsistenciasMaxAggregateInputType
  }

  export type AsistenciasGroupByOutputType = {
    id: number
    idAlumno: number
    idClase: number
    estado: $Enums.Estados
    nota: string | null
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: AsistenciasCountAggregateOutputType | null
    _avg: AsistenciasAvgAggregateOutputType | null
    _sum: AsistenciasSumAggregateOutputType | null
    _min: AsistenciasMinAggregateOutputType | null
    _max: AsistenciasMaxAggregateOutputType | null
  }

  type GetAsistenciasGroupByPayload<T extends AsistenciasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsistenciasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsistenciasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsistenciasGroupByOutputType[P]>
            : GetScalarType<T[P], AsistenciasGroupByOutputType[P]>
        }
      >
    >


  export type AsistenciasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAlumno?: boolean
    idClase?: boolean
    estado?: boolean
    nota?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    alumno?: boolean | AlumnosDefaultArgs<ExtArgs>
    clase?: boolean | ClasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencias"]>

  export type AsistenciasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAlumno?: boolean
    idClase?: boolean
    estado?: boolean
    nota?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    alumno?: boolean | AlumnosDefaultArgs<ExtArgs>
    clase?: boolean | ClasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencias"]>

  export type AsistenciasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAlumno?: boolean
    idClase?: boolean
    estado?: boolean
    nota?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    alumno?: boolean | AlumnosDefaultArgs<ExtArgs>
    clase?: boolean | ClasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencias"]>

  export type AsistenciasSelectScalar = {
    id?: boolean
    idAlumno?: boolean
    idClase?: boolean
    estado?: boolean
    nota?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AsistenciasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idAlumno" | "idClase" | "estado" | "nota" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["asistencias"]>
  export type AsistenciasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | AlumnosDefaultArgs<ExtArgs>
    clase?: boolean | ClasesDefaultArgs<ExtArgs>
  }
  export type AsistenciasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | AlumnosDefaultArgs<ExtArgs>
    clase?: boolean | ClasesDefaultArgs<ExtArgs>
  }
  export type AsistenciasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | AlumnosDefaultArgs<ExtArgs>
    clase?: boolean | ClasesDefaultArgs<ExtArgs>
  }

  export type $AsistenciasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asistencias"
    objects: {
      alumno: Prisma.$AlumnosPayload<ExtArgs>
      clase: Prisma.$ClasesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idAlumno: number
      idClase: number
      estado: $Enums.Estados
      nota: string | null
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["asistencias"]>
    composites: {}
  }

  type AsistenciasGetPayload<S extends boolean | null | undefined | AsistenciasDefaultArgs> = $Result.GetResult<Prisma.$AsistenciasPayload, S>

  type AsistenciasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsistenciasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsistenciasCountAggregateInputType | true
    }

  export interface AsistenciasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asistencias'], meta: { name: 'Asistencias' } }
    /**
     * Find zero or one Asistencias that matches the filter.
     * @param {AsistenciasFindUniqueArgs} args - Arguments to find a Asistencias
     * @example
     * // Get one Asistencias
     * const asistencias = await prisma.asistencias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsistenciasFindUniqueArgs>(args: SelectSubset<T, AsistenciasFindUniqueArgs<ExtArgs>>): Prisma__AsistenciasClient<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asistencias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsistenciasFindUniqueOrThrowArgs} args - Arguments to find a Asistencias
     * @example
     * // Get one Asistencias
     * const asistencias = await prisma.asistencias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsistenciasFindUniqueOrThrowArgs>(args: SelectSubset<T, AsistenciasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsistenciasClient<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciasFindFirstArgs} args - Arguments to find a Asistencias
     * @example
     * // Get one Asistencias
     * const asistencias = await prisma.asistencias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsistenciasFindFirstArgs>(args?: SelectSubset<T, AsistenciasFindFirstArgs<ExtArgs>>): Prisma__AsistenciasClient<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciasFindFirstOrThrowArgs} args - Arguments to find a Asistencias
     * @example
     * // Get one Asistencias
     * const asistencias = await prisma.asistencias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsistenciasFindFirstOrThrowArgs>(args?: SelectSubset<T, AsistenciasFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsistenciasClient<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistencias
     * const asistencias = await prisma.asistencias.findMany()
     * 
     * // Get first 10 Asistencias
     * const asistencias = await prisma.asistencias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asistenciasWithIdOnly = await prisma.asistencias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsistenciasFindManyArgs>(args?: SelectSubset<T, AsistenciasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asistencias.
     * @param {AsistenciasCreateArgs} args - Arguments to create a Asistencias.
     * @example
     * // Create one Asistencias
     * const Asistencias = await prisma.asistencias.create({
     *   data: {
     *     // ... data to create a Asistencias
     *   }
     * })
     * 
     */
    create<T extends AsistenciasCreateArgs>(args: SelectSubset<T, AsistenciasCreateArgs<ExtArgs>>): Prisma__AsistenciasClient<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asistencias.
     * @param {AsistenciasCreateManyArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencias = await prisma.asistencias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsistenciasCreateManyArgs>(args?: SelectSubset<T, AsistenciasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asistencias and returns the data saved in the database.
     * @param {AsistenciasCreateManyAndReturnArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencias = await prisma.asistencias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asistencias and only return the `id`
     * const asistenciasWithIdOnly = await prisma.asistencias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsistenciasCreateManyAndReturnArgs>(args?: SelectSubset<T, AsistenciasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asistencias.
     * @param {AsistenciasDeleteArgs} args - Arguments to delete one Asistencias.
     * @example
     * // Delete one Asistencias
     * const Asistencias = await prisma.asistencias.delete({
     *   where: {
     *     // ... filter to delete one Asistencias
     *   }
     * })
     * 
     */
    delete<T extends AsistenciasDeleteArgs>(args: SelectSubset<T, AsistenciasDeleteArgs<ExtArgs>>): Prisma__AsistenciasClient<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asistencias.
     * @param {AsistenciasUpdateArgs} args - Arguments to update one Asistencias.
     * @example
     * // Update one Asistencias
     * const asistencias = await prisma.asistencias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsistenciasUpdateArgs>(args: SelectSubset<T, AsistenciasUpdateArgs<ExtArgs>>): Prisma__AsistenciasClient<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asistencias.
     * @param {AsistenciasDeleteManyArgs} args - Arguments to filter Asistencias to delete.
     * @example
     * // Delete a few Asistencias
     * const { count } = await prisma.asistencias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsistenciasDeleteManyArgs>(args?: SelectSubset<T, AsistenciasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistencias
     * const asistencias = await prisma.asistencias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsistenciasUpdateManyArgs>(args: SelectSubset<T, AsistenciasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias and returns the data updated in the database.
     * @param {AsistenciasUpdateManyAndReturnArgs} args - Arguments to update many Asistencias.
     * @example
     * // Update many Asistencias
     * const asistencias = await prisma.asistencias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Asistencias and only return the `id`
     * const asistenciasWithIdOnly = await prisma.asistencias.updateManyAndReturn({
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
    updateManyAndReturn<T extends AsistenciasUpdateManyAndReturnArgs>(args: SelectSubset<T, AsistenciasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asistencias.
     * @param {AsistenciasUpsertArgs} args - Arguments to update or create a Asistencias.
     * @example
     * // Update or create a Asistencias
     * const asistencias = await prisma.asistencias.upsert({
     *   create: {
     *     // ... data to create a Asistencias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistencias we want to update
     *   }
     * })
     */
    upsert<T extends AsistenciasUpsertArgs>(args: SelectSubset<T, AsistenciasUpsertArgs<ExtArgs>>): Prisma__AsistenciasClient<$Result.GetResult<Prisma.$AsistenciasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciasCountArgs} args - Arguments to filter Asistencias to count.
     * @example
     * // Count the number of Asistencias
     * const count = await prisma.asistencias.count({
     *   where: {
     *     // ... the filter for the Asistencias we want to count
     *   }
     * })
    **/
    count<T extends AsistenciasCountArgs>(
      args?: Subset<T, AsistenciasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsistenciasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsistenciasAggregateArgs>(args: Subset<T, AsistenciasAggregateArgs>): Prisma.PrismaPromise<GetAsistenciasAggregateType<T>>

    /**
     * Group by Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciasGroupByArgs} args - Group by arguments.
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
      T extends AsistenciasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsistenciasGroupByArgs['orderBy'] }
        : { orderBy?: AsistenciasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AsistenciasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistenciasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asistencias model
   */
  readonly fields: AsistenciasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asistencias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsistenciasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alumno<T extends AlumnosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlumnosDefaultArgs<ExtArgs>>): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clase<T extends ClasesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClasesDefaultArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Asistencias model
   */
  interface AsistenciasFieldRefs {
    readonly id: FieldRef<"Asistencias", 'Int'>
    readonly idAlumno: FieldRef<"Asistencias", 'Int'>
    readonly idClase: FieldRef<"Asistencias", 'Int'>
    readonly estado: FieldRef<"Asistencias", 'Estados'>
    readonly nota: FieldRef<"Asistencias", 'String'>
    readonly createdAt: FieldRef<"Asistencias", 'DateTime'>
    readonly updatedAt: FieldRef<"Asistencias", 'DateTime'>
    readonly deletedAt: FieldRef<"Asistencias", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asistencias findUnique
   */
  export type AsistenciasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasInclude<ExtArgs> | null
    /**
     * Filter, which Asistencias to fetch.
     */
    where: AsistenciasWhereUniqueInput
  }

  /**
   * Asistencias findUniqueOrThrow
   */
  export type AsistenciasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasInclude<ExtArgs> | null
    /**
     * Filter, which Asistencias to fetch.
     */
    where: AsistenciasWhereUniqueInput
  }

  /**
   * Asistencias findFirst
   */
  export type AsistenciasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasInclude<ExtArgs> | null
    /**
     * Filter, which Asistencias to fetch.
     */
    where?: AsistenciasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciasOrderByWithRelationInput | AsistenciasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asistencias.
     */
    cursor?: AsistenciasWhereUniqueInput
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
    distinct?: AsistenciasScalarFieldEnum | AsistenciasScalarFieldEnum[]
  }

  /**
   * Asistencias findFirstOrThrow
   */
  export type AsistenciasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasInclude<ExtArgs> | null
    /**
     * Filter, which Asistencias to fetch.
     */
    where?: AsistenciasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciasOrderByWithRelationInput | AsistenciasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asistencias.
     */
    cursor?: AsistenciasWhereUniqueInput
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
    distinct?: AsistenciasScalarFieldEnum | AsistenciasScalarFieldEnum[]
  }

  /**
   * Asistencias findMany
   */
  export type AsistenciasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasInclude<ExtArgs> | null
    /**
     * Filter, which Asistencias to fetch.
     */
    where?: AsistenciasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciasOrderByWithRelationInput | AsistenciasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asistencias.
     */
    cursor?: AsistenciasWhereUniqueInput
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
    distinct?: AsistenciasScalarFieldEnum | AsistenciasScalarFieldEnum[]
  }

  /**
   * Asistencias create
   */
  export type AsistenciasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasInclude<ExtArgs> | null
    /**
     * The data needed to create a Asistencias.
     */
    data: XOR<AsistenciasCreateInput, AsistenciasUncheckedCreateInput>
  }

  /**
   * Asistencias createMany
   */
  export type AsistenciasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asistencias.
     */
    data: AsistenciasCreateManyInput | AsistenciasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asistencias createManyAndReturn
   */
  export type AsistenciasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * The data used to create many Asistencias.
     */
    data: AsistenciasCreateManyInput | AsistenciasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asistencias update
   */
  export type AsistenciasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasInclude<ExtArgs> | null
    /**
     * The data needed to update a Asistencias.
     */
    data: XOR<AsistenciasUpdateInput, AsistenciasUncheckedUpdateInput>
    /**
     * Choose, which Asistencias to update.
     */
    where: AsistenciasWhereUniqueInput
  }

  /**
   * Asistencias updateMany
   */
  export type AsistenciasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asistencias.
     */
    data: XOR<AsistenciasUpdateManyMutationInput, AsistenciasUncheckedUpdateManyInput>
    /**
     * Filter which Asistencias to update
     */
    where?: AsistenciasWhereInput
    /**
     * Limit how many Asistencias to update.
     */
    limit?: number
  }

  /**
   * Asistencias updateManyAndReturn
   */
  export type AsistenciasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * The data used to update Asistencias.
     */
    data: XOR<AsistenciasUpdateManyMutationInput, AsistenciasUncheckedUpdateManyInput>
    /**
     * Filter which Asistencias to update
     */
    where?: AsistenciasWhereInput
    /**
     * Limit how many Asistencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asistencias upsert
   */
  export type AsistenciasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasInclude<ExtArgs> | null
    /**
     * The filter to search for the Asistencias to update in case it exists.
     */
    where: AsistenciasWhereUniqueInput
    /**
     * In case the Asistencias found by the `where` argument doesn't exist, create a new Asistencias with this data.
     */
    create: XOR<AsistenciasCreateInput, AsistenciasUncheckedCreateInput>
    /**
     * In case the Asistencias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsistenciasUpdateInput, AsistenciasUncheckedUpdateInput>
  }

  /**
   * Asistencias delete
   */
  export type AsistenciasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasInclude<ExtArgs> | null
    /**
     * Filter which Asistencias to delete.
     */
    where: AsistenciasWhereUniqueInput
  }

  /**
   * Asistencias deleteMany
   */
  export type AsistenciasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asistencias to delete
     */
    where?: AsistenciasWhereInput
    /**
     * Limit how many Asistencias to delete.
     */
    limit?: number
  }

  /**
   * Asistencias without action
   */
  export type AsistenciasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencias
     */
    select?: AsistenciasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencias
     */
    omit?: AsistenciasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciasInclude<ExtArgs> | null
  }


  /**
   * Model UsersDocentes
   */

  export type AggregateUsersDocentes = {
    _count: UsersDocentesCountAggregateOutputType | null
    _avg: UsersDocentesAvgAggregateOutputType | null
    _sum: UsersDocentesSumAggregateOutputType | null
    _min: UsersDocentesMinAggregateOutputType | null
    _max: UsersDocentesMaxAggregateOutputType | null
  }

  export type UsersDocentesAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersDocentesSumAggregateOutputType = {
    id: number | null
  }

  export type UsersDocentesMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nombre: string | null
    apellido: string | null
    rol: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UsersDocentesMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nombre: string | null
    apellido: string | null
    rol: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UsersDocentesCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nombre: number
    apellido: number
    rol: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UsersDocentesAvgAggregateInputType = {
    id?: true
  }

  export type UsersDocentesSumAggregateInputType = {
    id?: true
  }

  export type UsersDocentesMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    apellido?: true
    rol?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UsersDocentesMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    apellido?: true
    rol?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UsersDocentesCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    apellido?: true
    rol?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UsersDocentesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersDocentes to aggregate.
     */
    where?: UsersDocentesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersDocentes to fetch.
     */
    orderBy?: UsersDocentesOrderByWithRelationInput | UsersDocentesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersDocentesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersDocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersDocentes
    **/
    _count?: true | UsersDocentesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersDocentesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersDocentesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersDocentesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersDocentesMaxAggregateInputType
  }

  export type GetUsersDocentesAggregateType<T extends UsersDocentesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersDocentes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersDocentes[P]>
      : GetScalarType<T[P], AggregateUsersDocentes[P]>
  }




  export type UsersDocentesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersDocentesWhereInput
    orderBy?: UsersDocentesOrderByWithAggregationInput | UsersDocentesOrderByWithAggregationInput[]
    by: UsersDocentesScalarFieldEnum[] | UsersDocentesScalarFieldEnum
    having?: UsersDocentesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersDocentesCountAggregateInputType | true
    _avg?: UsersDocentesAvgAggregateInputType
    _sum?: UsersDocentesSumAggregateInputType
    _min?: UsersDocentesMinAggregateInputType
    _max?: UsersDocentesMaxAggregateInputType
  }

  export type UsersDocentesGroupByOutputType = {
    id: number
    email: string
    password: string
    nombre: string
    apellido: string
    rol: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: UsersDocentesCountAggregateOutputType | null
    _avg: UsersDocentesAvgAggregateOutputType | null
    _sum: UsersDocentesSumAggregateOutputType | null
    _min: UsersDocentesMinAggregateOutputType | null
    _max: UsersDocentesMaxAggregateOutputType | null
  }

  type GetUsersDocentesGroupByPayload<T extends UsersDocentesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersDocentesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersDocentesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersDocentesGroupByOutputType[P]>
            : GetScalarType<T[P], UsersDocentesGroupByOutputType[P]>
        }
      >
    >


  export type UsersDocentesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
    rol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Materias?: boolean | UsersDocentes$MateriasArgs<ExtArgs>
    _count?: boolean | UsersDocentesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersDocentes"]>

  export type UsersDocentesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
    rol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["usersDocentes"]>

  export type UsersDocentesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
    rol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["usersDocentes"]>

  export type UsersDocentesSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
    rol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UsersDocentesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nombre" | "apellido" | "rol" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["usersDocentes"]>
  export type UsersDocentesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materias?: boolean | UsersDocentes$MateriasArgs<ExtArgs>
    _count?: boolean | UsersDocentesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersDocentesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersDocentesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersDocentesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersDocentes"
    objects: {
      Materias: Prisma.$MateriasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      nombre: string
      apellido: string
      rol: string
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["usersDocentes"]>
    composites: {}
  }

  type UsersDocentesGetPayload<S extends boolean | null | undefined | UsersDocentesDefaultArgs> = $Result.GetResult<Prisma.$UsersDocentesPayload, S>

  type UsersDocentesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersDocentesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersDocentesCountAggregateInputType | true
    }

  export interface UsersDocentesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersDocentes'], meta: { name: 'UsersDocentes' } }
    /**
     * Find zero or one UsersDocentes that matches the filter.
     * @param {UsersDocentesFindUniqueArgs} args - Arguments to find a UsersDocentes
     * @example
     * // Get one UsersDocentes
     * const usersDocentes = await prisma.usersDocentes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersDocentesFindUniqueArgs>(args: SelectSubset<T, UsersDocentesFindUniqueArgs<ExtArgs>>): Prisma__UsersDocentesClient<$Result.GetResult<Prisma.$UsersDocentesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsersDocentes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersDocentesFindUniqueOrThrowArgs} args - Arguments to find a UsersDocentes
     * @example
     * // Get one UsersDocentes
     * const usersDocentes = await prisma.usersDocentes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersDocentesFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersDocentesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersDocentesClient<$Result.GetResult<Prisma.$UsersDocentesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersDocentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersDocentesFindFirstArgs} args - Arguments to find a UsersDocentes
     * @example
     * // Get one UsersDocentes
     * const usersDocentes = await prisma.usersDocentes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersDocentesFindFirstArgs>(args?: SelectSubset<T, UsersDocentesFindFirstArgs<ExtArgs>>): Prisma__UsersDocentesClient<$Result.GetResult<Prisma.$UsersDocentesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersDocentes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersDocentesFindFirstOrThrowArgs} args - Arguments to find a UsersDocentes
     * @example
     * // Get one UsersDocentes
     * const usersDocentes = await prisma.usersDocentes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersDocentesFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersDocentesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersDocentesClient<$Result.GetResult<Prisma.$UsersDocentesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsersDocentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersDocentesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersDocentes
     * const usersDocentes = await prisma.usersDocentes.findMany()
     * 
     * // Get first 10 UsersDocentes
     * const usersDocentes = await prisma.usersDocentes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersDocentesWithIdOnly = await prisma.usersDocentes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersDocentesFindManyArgs>(args?: SelectSubset<T, UsersDocentesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersDocentesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsersDocentes.
     * @param {UsersDocentesCreateArgs} args - Arguments to create a UsersDocentes.
     * @example
     * // Create one UsersDocentes
     * const UsersDocentes = await prisma.usersDocentes.create({
     *   data: {
     *     // ... data to create a UsersDocentes
     *   }
     * })
     * 
     */
    create<T extends UsersDocentesCreateArgs>(args: SelectSubset<T, UsersDocentesCreateArgs<ExtArgs>>): Prisma__UsersDocentesClient<$Result.GetResult<Prisma.$UsersDocentesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsersDocentes.
     * @param {UsersDocentesCreateManyArgs} args - Arguments to create many UsersDocentes.
     * @example
     * // Create many UsersDocentes
     * const usersDocentes = await prisma.usersDocentes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersDocentesCreateManyArgs>(args?: SelectSubset<T, UsersDocentesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsersDocentes and returns the data saved in the database.
     * @param {UsersDocentesCreateManyAndReturnArgs} args - Arguments to create many UsersDocentes.
     * @example
     * // Create many UsersDocentes
     * const usersDocentes = await prisma.usersDocentes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsersDocentes and only return the `id`
     * const usersDocentesWithIdOnly = await prisma.usersDocentes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersDocentesCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersDocentesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersDocentesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsersDocentes.
     * @param {UsersDocentesDeleteArgs} args - Arguments to delete one UsersDocentes.
     * @example
     * // Delete one UsersDocentes
     * const UsersDocentes = await prisma.usersDocentes.delete({
     *   where: {
     *     // ... filter to delete one UsersDocentes
     *   }
     * })
     * 
     */
    delete<T extends UsersDocentesDeleteArgs>(args: SelectSubset<T, UsersDocentesDeleteArgs<ExtArgs>>): Prisma__UsersDocentesClient<$Result.GetResult<Prisma.$UsersDocentesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsersDocentes.
     * @param {UsersDocentesUpdateArgs} args - Arguments to update one UsersDocentes.
     * @example
     * // Update one UsersDocentes
     * const usersDocentes = await prisma.usersDocentes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersDocentesUpdateArgs>(args: SelectSubset<T, UsersDocentesUpdateArgs<ExtArgs>>): Prisma__UsersDocentesClient<$Result.GetResult<Prisma.$UsersDocentesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsersDocentes.
     * @param {UsersDocentesDeleteManyArgs} args - Arguments to filter UsersDocentes to delete.
     * @example
     * // Delete a few UsersDocentes
     * const { count } = await prisma.usersDocentes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDocentesDeleteManyArgs>(args?: SelectSubset<T, UsersDocentesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersDocentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersDocentesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersDocentes
     * const usersDocentes = await prisma.usersDocentes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersDocentesUpdateManyArgs>(args: SelectSubset<T, UsersDocentesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersDocentes and returns the data updated in the database.
     * @param {UsersDocentesUpdateManyAndReturnArgs} args - Arguments to update many UsersDocentes.
     * @example
     * // Update many UsersDocentes
     * const usersDocentes = await prisma.usersDocentes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsersDocentes and only return the `id`
     * const usersDocentesWithIdOnly = await prisma.usersDocentes.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersDocentesUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersDocentesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersDocentesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsersDocentes.
     * @param {UsersDocentesUpsertArgs} args - Arguments to update or create a UsersDocentes.
     * @example
     * // Update or create a UsersDocentes
     * const usersDocentes = await prisma.usersDocentes.upsert({
     *   create: {
     *     // ... data to create a UsersDocentes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersDocentes we want to update
     *   }
     * })
     */
    upsert<T extends UsersDocentesUpsertArgs>(args: SelectSubset<T, UsersDocentesUpsertArgs<ExtArgs>>): Prisma__UsersDocentesClient<$Result.GetResult<Prisma.$UsersDocentesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsersDocentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersDocentesCountArgs} args - Arguments to filter UsersDocentes to count.
     * @example
     * // Count the number of UsersDocentes
     * const count = await prisma.usersDocentes.count({
     *   where: {
     *     // ... the filter for the UsersDocentes we want to count
     *   }
     * })
    **/
    count<T extends UsersDocentesCountArgs>(
      args?: Subset<T, UsersDocentesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersDocentesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersDocentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersDocentesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersDocentesAggregateArgs>(args: Subset<T, UsersDocentesAggregateArgs>): Prisma.PrismaPromise<GetUsersDocentesAggregateType<T>>

    /**
     * Group by UsersDocentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersDocentesGroupByArgs} args - Group by arguments.
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
      T extends UsersDocentesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersDocentesGroupByArgs['orderBy'] }
        : { orderBy?: UsersDocentesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersDocentesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersDocentesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersDocentes model
   */
  readonly fields: UsersDocentesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersDocentes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersDocentesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Materias<T extends UsersDocentes$MateriasArgs<ExtArgs> = {}>(args?: Subset<T, UsersDocentes$MateriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UsersDocentes model
   */
  interface UsersDocentesFieldRefs {
    readonly id: FieldRef<"UsersDocentes", 'Int'>
    readonly email: FieldRef<"UsersDocentes", 'String'>
    readonly password: FieldRef<"UsersDocentes", 'String'>
    readonly nombre: FieldRef<"UsersDocentes", 'String'>
    readonly apellido: FieldRef<"UsersDocentes", 'String'>
    readonly rol: FieldRef<"UsersDocentes", 'String'>
    readonly createdAt: FieldRef<"UsersDocentes", 'DateTime'>
    readonly updatedAt: FieldRef<"UsersDocentes", 'DateTime'>
    readonly deletedAt: FieldRef<"UsersDocentes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsersDocentes findUnique
   */
  export type UsersDocentesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentes
     */
    select?: UsersDocentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersDocentes
     */
    omit?: UsersDocentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersDocentesInclude<ExtArgs> | null
    /**
     * Filter, which UsersDocentes to fetch.
     */
    where: UsersDocentesWhereUniqueInput
  }

  /**
   * UsersDocentes findUniqueOrThrow
   */
  export type UsersDocentesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentes
     */
    select?: UsersDocentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersDocentes
     */
    omit?: UsersDocentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersDocentesInclude<ExtArgs> | null
    /**
     * Filter, which UsersDocentes to fetch.
     */
    where: UsersDocentesWhereUniqueInput
  }

  /**
   * UsersDocentes findFirst
   */
  export type UsersDocentesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentes
     */
    select?: UsersDocentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersDocentes
     */
    omit?: UsersDocentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersDocentesInclude<ExtArgs> | null
    /**
     * Filter, which UsersDocentes to fetch.
     */
    where?: UsersDocentesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersDocentes to fetch.
     */
    orderBy?: UsersDocentesOrderByWithRelationInput | UsersDocentesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersDocentes.
     */
    cursor?: UsersDocentesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersDocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersDocentes.
     */
    distinct?: UsersDocentesScalarFieldEnum | UsersDocentesScalarFieldEnum[]
  }

  /**
   * UsersDocentes findFirstOrThrow
   */
  export type UsersDocentesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentes
     */
    select?: UsersDocentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersDocentes
     */
    omit?: UsersDocentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersDocentesInclude<ExtArgs> | null
    /**
     * Filter, which UsersDocentes to fetch.
     */
    where?: UsersDocentesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersDocentes to fetch.
     */
    orderBy?: UsersDocentesOrderByWithRelationInput | UsersDocentesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersDocentes.
     */
    cursor?: UsersDocentesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersDocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersDocentes.
     */
    distinct?: UsersDocentesScalarFieldEnum | UsersDocentesScalarFieldEnum[]
  }

  /**
   * UsersDocentes findMany
   */
  export type UsersDocentesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentes
     */
    select?: UsersDocentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersDocentes
     */
    omit?: UsersDocentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersDocentesInclude<ExtArgs> | null
    /**
     * Filter, which UsersDocentes to fetch.
     */
    where?: UsersDocentesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersDocentes to fetch.
     */
    orderBy?: UsersDocentesOrderByWithRelationInput | UsersDocentesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersDocentes.
     */
    cursor?: UsersDocentesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersDocentes.
     */
    skip?: number
    distinct?: UsersDocentesScalarFieldEnum | UsersDocentesScalarFieldEnum[]
  }

  /**
   * UsersDocentes create
   */
  export type UsersDocentesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentes
     */
    select?: UsersDocentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersDocentes
     */
    omit?: UsersDocentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersDocentesInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersDocentes.
     */
    data: XOR<UsersDocentesCreateInput, UsersDocentesUncheckedCreateInput>
  }

  /**
   * UsersDocentes createMany
   */
  export type UsersDocentesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersDocentes.
     */
    data: UsersDocentesCreateManyInput | UsersDocentesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersDocentes createManyAndReturn
   */
  export type UsersDocentesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentes
     */
    select?: UsersDocentesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersDocentes
     */
    omit?: UsersDocentesOmit<ExtArgs> | null
    /**
     * The data used to create many UsersDocentes.
     */
    data: UsersDocentesCreateManyInput | UsersDocentesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersDocentes update
   */
  export type UsersDocentesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentes
     */
    select?: UsersDocentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersDocentes
     */
    omit?: UsersDocentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersDocentesInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersDocentes.
     */
    data: XOR<UsersDocentesUpdateInput, UsersDocentesUncheckedUpdateInput>
    /**
     * Choose, which UsersDocentes to update.
     */
    where: UsersDocentesWhereUniqueInput
  }

  /**
   * UsersDocentes updateMany
   */
  export type UsersDocentesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersDocentes.
     */
    data: XOR<UsersDocentesUpdateManyMutationInput, UsersDocentesUncheckedUpdateManyInput>
    /**
     * Filter which UsersDocentes to update
     */
    where?: UsersDocentesWhereInput
    /**
     * Limit how many UsersDocentes to update.
     */
    limit?: number
  }

  /**
   * UsersDocentes updateManyAndReturn
   */
  export type UsersDocentesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentes
     */
    select?: UsersDocentesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersDocentes
     */
    omit?: UsersDocentesOmit<ExtArgs> | null
    /**
     * The data used to update UsersDocentes.
     */
    data: XOR<UsersDocentesUpdateManyMutationInput, UsersDocentesUncheckedUpdateManyInput>
    /**
     * Filter which UsersDocentes to update
     */
    where?: UsersDocentesWhereInput
    /**
     * Limit how many UsersDocentes to update.
     */
    limit?: number
  }

  /**
   * UsersDocentes upsert
   */
  export type UsersDocentesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentes
     */
    select?: UsersDocentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersDocentes
     */
    omit?: UsersDocentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersDocentesInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersDocentes to update in case it exists.
     */
    where: UsersDocentesWhereUniqueInput
    /**
     * In case the UsersDocentes found by the `where` argument doesn't exist, create a new UsersDocentes with this data.
     */
    create: XOR<UsersDocentesCreateInput, UsersDocentesUncheckedCreateInput>
    /**
     * In case the UsersDocentes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersDocentesUpdateInput, UsersDocentesUncheckedUpdateInput>
  }

  /**
   * UsersDocentes delete
   */
  export type UsersDocentesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentes
     */
    select?: UsersDocentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersDocentes
     */
    omit?: UsersDocentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersDocentesInclude<ExtArgs> | null
    /**
     * Filter which UsersDocentes to delete.
     */
    where: UsersDocentesWhereUniqueInput
  }

  /**
   * UsersDocentes deleteMany
   */
  export type UsersDocentesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersDocentes to delete
     */
    where?: UsersDocentesWhereInput
    /**
     * Limit how many UsersDocentes to delete.
     */
    limit?: number
  }

  /**
   * UsersDocentes.Materias
   */
  export type UsersDocentes$MateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasInclude<ExtArgs> | null
    where?: MateriasWhereInput
    orderBy?: MateriasOrderByWithRelationInput | MateriasOrderByWithRelationInput[]
    cursor?: MateriasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriasScalarFieldEnum | MateriasScalarFieldEnum[]
  }

  /**
   * UsersDocentes without action
   */
  export type UsersDocentesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersDocentes
     */
    select?: UsersDocentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersDocentes
     */
    omit?: UsersDocentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersDocentesInclude<ExtArgs> | null
  }


  /**
   * Model Materias
   */

  export type AggregateMaterias = {
    _count: MateriasCountAggregateOutputType | null
    _avg: MateriasAvgAggregateOutputType | null
    _sum: MateriasSumAggregateOutputType | null
    _min: MateriasMinAggregateOutputType | null
    _max: MateriasMaxAggregateOutputType | null
  }

  export type MateriasAvgAggregateOutputType = {
    id: number | null
    idUserDocente: number | null
    idCurso: number | null
  }

  export type MateriasSumAggregateOutputType = {
    id: number | null
    idUserDocente: number | null
    idCurso: number | null
  }

  export type MateriasMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    idUserDocente: number | null
    idCurso: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MateriasMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    idUserDocente: number | null
    idCurso: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MateriasCountAggregateOutputType = {
    id: number
    nombre: number
    idUserDocente: number
    idCurso: number
    fechaInicio: number
    fechaFin: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type MateriasAvgAggregateInputType = {
    id?: true
    idUserDocente?: true
    idCurso?: true
  }

  export type MateriasSumAggregateInputType = {
    id?: true
    idUserDocente?: true
    idCurso?: true
  }

  export type MateriasMinAggregateInputType = {
    id?: true
    nombre?: true
    idUserDocente?: true
    idCurso?: true
    fechaInicio?: true
    fechaFin?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MateriasMaxAggregateInputType = {
    id?: true
    nombre?: true
    idUserDocente?: true
    idCurso?: true
    fechaInicio?: true
    fechaFin?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MateriasCountAggregateInputType = {
    id?: true
    nombre?: true
    idUserDocente?: true
    idCurso?: true
    fechaInicio?: true
    fechaFin?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type MateriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to aggregate.
     */
    where?: MateriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriasOrderByWithRelationInput | MateriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriasWhereUniqueInput
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
    _count?: true | MateriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriasMaxAggregateInputType
  }

  export type GetMateriasAggregateType<T extends MateriasAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterias[P]>
      : GetScalarType<T[P], AggregateMaterias[P]>
  }




  export type MateriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriasWhereInput
    orderBy?: MateriasOrderByWithAggregationInput | MateriasOrderByWithAggregationInput[]
    by: MateriasScalarFieldEnum[] | MateriasScalarFieldEnum
    having?: MateriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriasCountAggregateInputType | true
    _avg?: MateriasAvgAggregateInputType
    _sum?: MateriasSumAggregateInputType
    _min?: MateriasMinAggregateInputType
    _max?: MateriasMaxAggregateInputType
  }

  export type MateriasGroupByOutputType = {
    id: number
    nombre: string
    idUserDocente: number
    idCurso: number
    fechaInicio: Date
    fechaFin: Date
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: MateriasCountAggregateOutputType | null
    _avg: MateriasAvgAggregateOutputType | null
    _sum: MateriasSumAggregateOutputType | null
    _min: MateriasMinAggregateOutputType | null
    _max: MateriasMaxAggregateOutputType | null
  }

  type GetMateriasGroupByPayload<T extends MateriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriasGroupByOutputType[P]>
            : GetScalarType<T[P], MateriasGroupByOutputType[P]>
        }
      >
    >


  export type MateriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    idUserDocente?: boolean
    idCurso?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userDocente?: boolean | UsersDocentesDefaultArgs<ExtArgs>
    curso?: boolean | CursosDefaultArgs<ExtArgs>
    Clases?: boolean | Materias$ClasesArgs<ExtArgs>
    DiasHorariosClases?: boolean | Materias$DiasHorariosClasesArgs<ExtArgs>
    _count?: boolean | MateriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materias"]>

  export type MateriasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    idUserDocente?: boolean
    idCurso?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userDocente?: boolean | UsersDocentesDefaultArgs<ExtArgs>
    curso?: boolean | CursosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materias"]>

  export type MateriasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    idUserDocente?: boolean
    idCurso?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userDocente?: boolean | UsersDocentesDefaultArgs<ExtArgs>
    curso?: boolean | CursosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materias"]>

  export type MateriasSelectScalar = {
    id?: boolean
    nombre?: boolean
    idUserDocente?: boolean
    idCurso?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type MateriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "idUserDocente" | "idCurso" | "fechaInicio" | "fechaFin" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["materias"]>
  export type MateriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDocente?: boolean | UsersDocentesDefaultArgs<ExtArgs>
    curso?: boolean | CursosDefaultArgs<ExtArgs>
    Clases?: boolean | Materias$ClasesArgs<ExtArgs>
    DiasHorariosClases?: boolean | Materias$DiasHorariosClasesArgs<ExtArgs>
    _count?: boolean | MateriasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MateriasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDocente?: boolean | UsersDocentesDefaultArgs<ExtArgs>
    curso?: boolean | CursosDefaultArgs<ExtArgs>
  }
  export type MateriasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDocente?: boolean | UsersDocentesDefaultArgs<ExtArgs>
    curso?: boolean | CursosDefaultArgs<ExtArgs>
  }

  export type $MateriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materias"
    objects: {
      userDocente: Prisma.$UsersDocentesPayload<ExtArgs>
      curso: Prisma.$CursosPayload<ExtArgs>
      Clases: Prisma.$ClasesPayload<ExtArgs>[]
      DiasHorariosClases: Prisma.$DiasHorariosClasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      idUserDocente: number
      idCurso: number
      fechaInicio: Date
      fechaFin: Date
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["materias"]>
    composites: {}
  }

  type MateriasGetPayload<S extends boolean | null | undefined | MateriasDefaultArgs> = $Result.GetResult<Prisma.$MateriasPayload, S>

  type MateriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriasCountAggregateInputType | true
    }

  export interface MateriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materias'], meta: { name: 'Materias' } }
    /**
     * Find zero or one Materias that matches the filter.
     * @param {MateriasFindUniqueArgs} args - Arguments to find a Materias
     * @example
     * // Get one Materias
     * const materias = await prisma.materias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriasFindUniqueArgs>(args: SelectSubset<T, MateriasFindUniqueArgs<ExtArgs>>): Prisma__MateriasClient<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriasFindUniqueOrThrowArgs} args - Arguments to find a Materias
     * @example
     * // Get one Materias
     * const materias = await prisma.materias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriasFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriasClient<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriasFindFirstArgs} args - Arguments to find a Materias
     * @example
     * // Get one Materias
     * const materias = await prisma.materias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriasFindFirstArgs>(args?: SelectSubset<T, MateriasFindFirstArgs<ExtArgs>>): Prisma__MateriasClient<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriasFindFirstOrThrowArgs} args - Arguments to find a Materias
     * @example
     * // Get one Materias
     * const materias = await prisma.materias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriasFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriasClient<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materias.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiasWithIdOnly = await prisma.materias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MateriasFindManyArgs>(args?: SelectSubset<T, MateriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materias.
     * @param {MateriasCreateArgs} args - Arguments to create a Materias.
     * @example
     * // Create one Materias
     * const Materias = await prisma.materias.create({
     *   data: {
     *     // ... data to create a Materias
     *   }
     * })
     * 
     */
    create<T extends MateriasCreateArgs>(args: SelectSubset<T, MateriasCreateArgs<ExtArgs>>): Prisma__MateriasClient<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materias.
     * @param {MateriasCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materias = await prisma.materias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriasCreateManyArgs>(args?: SelectSubset<T, MateriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materias and returns the data saved in the database.
     * @param {MateriasCreateManyAndReturnArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materias = await prisma.materias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materias and only return the `id`
     * const materiasWithIdOnly = await prisma.materias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriasCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materias.
     * @param {MateriasDeleteArgs} args - Arguments to delete one Materias.
     * @example
     * // Delete one Materias
     * const Materias = await prisma.materias.delete({
     *   where: {
     *     // ... filter to delete one Materias
     *   }
     * })
     * 
     */
    delete<T extends MateriasDeleteArgs>(args: SelectSubset<T, MateriasDeleteArgs<ExtArgs>>): Prisma__MateriasClient<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materias.
     * @param {MateriasUpdateArgs} args - Arguments to update one Materias.
     * @example
     * // Update one Materias
     * const materias = await prisma.materias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriasUpdateArgs>(args: SelectSubset<T, MateriasUpdateArgs<ExtArgs>>): Prisma__MateriasClient<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materias.
     * @param {MateriasDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriasDeleteManyArgs>(args?: SelectSubset<T, MateriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materias = await prisma.materias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriasUpdateManyArgs>(args: SelectSubset<T, MateriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias and returns the data updated in the database.
     * @param {MateriasUpdateManyAndReturnArgs} args - Arguments to update many Materias.
     * @example
     * // Update many Materias
     * const materias = await prisma.materias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materias and only return the `id`
     * const materiasWithIdOnly = await prisma.materias.updateManyAndReturn({
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
    updateManyAndReturn<T extends MateriasUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materias.
     * @param {MateriasUpsertArgs} args - Arguments to update or create a Materias.
     * @example
     * // Update or create a Materias
     * const materias = await prisma.materias.upsert({
     *   create: {
     *     // ... data to create a Materias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materias we want to update
     *   }
     * })
     */
    upsert<T extends MateriasUpsertArgs>(args: SelectSubset<T, MateriasUpsertArgs<ExtArgs>>): Prisma__MateriasClient<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriasCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materias.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends MateriasCountArgs>(
      args?: Subset<T, MateriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MateriasAggregateArgs>(args: Subset<T, MateriasAggregateArgs>): Prisma.PrismaPromise<GetMateriasAggregateType<T>>

    /**
     * Group by Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriasGroupByArgs} args - Group by arguments.
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
      T extends MateriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriasGroupByArgs['orderBy'] }
        : { orderBy?: MateriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MateriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materias model
   */
  readonly fields: MateriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userDocente<T extends UsersDocentesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDocentesDefaultArgs<ExtArgs>>): Prisma__UsersDocentesClient<$Result.GetResult<Prisma.$UsersDocentesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    curso<T extends CursosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursosDefaultArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Clases<T extends Materias$ClasesArgs<ExtArgs> = {}>(args?: Subset<T, Materias$ClasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DiasHorariosClases<T extends Materias$DiasHorariosClasesArgs<ExtArgs> = {}>(args?: Subset<T, Materias$DiasHorariosClasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiasHorariosClasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Materias model
   */
  interface MateriasFieldRefs {
    readonly id: FieldRef<"Materias", 'Int'>
    readonly nombre: FieldRef<"Materias", 'String'>
    readonly idUserDocente: FieldRef<"Materias", 'Int'>
    readonly idCurso: FieldRef<"Materias", 'Int'>
    readonly fechaInicio: FieldRef<"Materias", 'DateTime'>
    readonly fechaFin: FieldRef<"Materias", 'DateTime'>
    readonly createdAt: FieldRef<"Materias", 'DateTime'>
    readonly updatedAt: FieldRef<"Materias", 'DateTime'>
    readonly deletedAt: FieldRef<"Materias", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Materias findUnique
   */
  export type MateriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where: MateriasWhereUniqueInput
  }

  /**
   * Materias findUniqueOrThrow
   */
  export type MateriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where: MateriasWhereUniqueInput
  }

  /**
   * Materias findFirst
   */
  export type MateriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriasOrderByWithRelationInput | MateriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriasWhereUniqueInput
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
    distinct?: MateriasScalarFieldEnum | MateriasScalarFieldEnum[]
  }

  /**
   * Materias findFirstOrThrow
   */
  export type MateriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriasOrderByWithRelationInput | MateriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriasWhereUniqueInput
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
    distinct?: MateriasScalarFieldEnum | MateriasScalarFieldEnum[]
  }

  /**
   * Materias findMany
   */
  export type MateriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriasOrderByWithRelationInput | MateriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materias.
     */
    cursor?: MateriasWhereUniqueInput
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
    distinct?: MateriasScalarFieldEnum | MateriasScalarFieldEnum[]
  }

  /**
   * Materias create
   */
  export type MateriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasInclude<ExtArgs> | null
    /**
     * The data needed to create a Materias.
     */
    data: XOR<MateriasCreateInput, MateriasUncheckedCreateInput>
  }

  /**
   * Materias createMany
   */
  export type MateriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materias.
     */
    data: MateriasCreateManyInput | MateriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materias createManyAndReturn
   */
  export type MateriasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * The data used to create many Materias.
     */
    data: MateriasCreateManyInput | MateriasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materias update
   */
  export type MateriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasInclude<ExtArgs> | null
    /**
     * The data needed to update a Materias.
     */
    data: XOR<MateriasUpdateInput, MateriasUncheckedUpdateInput>
    /**
     * Choose, which Materias to update.
     */
    where: MateriasWhereUniqueInput
  }

  /**
   * Materias updateMany
   */
  export type MateriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriasUpdateManyMutationInput, MateriasUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriasWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materias updateManyAndReturn
   */
  export type MateriasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriasUpdateManyMutationInput, MateriasUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriasWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materias upsert
   */
  export type MateriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasInclude<ExtArgs> | null
    /**
     * The filter to search for the Materias to update in case it exists.
     */
    where: MateriasWhereUniqueInput
    /**
     * In case the Materias found by the `where` argument doesn't exist, create a new Materias with this data.
     */
    create: XOR<MateriasCreateInput, MateriasUncheckedCreateInput>
    /**
     * In case the Materias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriasUpdateInput, MateriasUncheckedUpdateInput>
  }

  /**
   * Materias delete
   */
  export type MateriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasInclude<ExtArgs> | null
    /**
     * Filter which Materias to delete.
     */
    where: MateriasWhereUniqueInput
  }

  /**
   * Materias deleteMany
   */
  export type MateriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to delete
     */
    where?: MateriasWhereInput
    /**
     * Limit how many Materias to delete.
     */
    limit?: number
  }

  /**
   * Materias.Clases
   */
  export type Materias$ClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    where?: ClasesWhereInput
    orderBy?: ClasesOrderByWithRelationInput | ClasesOrderByWithRelationInput[]
    cursor?: ClasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClasesScalarFieldEnum | ClasesScalarFieldEnum[]
  }

  /**
   * Materias.DiasHorariosClases
   */
  export type Materias$DiasHorariosClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesInclude<ExtArgs> | null
    where?: DiasHorariosClasesWhereInput
    orderBy?: DiasHorariosClasesOrderByWithRelationInput | DiasHorariosClasesOrderByWithRelationInput[]
    cursor?: DiasHorariosClasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiasHorariosClasesScalarFieldEnum | DiasHorariosClasesScalarFieldEnum[]
  }

  /**
   * Materias without action
   */
  export type MateriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasInclude<ExtArgs> | null
  }


  /**
   * Model DiasHorariosClases
   */

  export type AggregateDiasHorariosClases = {
    _count: DiasHorariosClasesCountAggregateOutputType | null
    _avg: DiasHorariosClasesAvgAggregateOutputType | null
    _sum: DiasHorariosClasesSumAggregateOutputType | null
    _min: DiasHorariosClasesMinAggregateOutputType | null
    _max: DiasHorariosClasesMaxAggregateOutputType | null
  }

  export type DiasHorariosClasesAvgAggregateOutputType = {
    id: number | null
    idMateria: number | null
    duracionMinutos: number | null
  }

  export type DiasHorariosClasesSumAggregateOutputType = {
    id: number | null
    idMateria: number | null
    duracionMinutos: number | null
  }

  export type DiasHorariosClasesMinAggregateOutputType = {
    id: number | null
    idMateria: number | null
    horaInicio: string | null
    duracionMinutos: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DiasHorariosClasesMaxAggregateOutputType = {
    id: number | null
    idMateria: number | null
    horaInicio: string | null
    duracionMinutos: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DiasHorariosClasesCountAggregateOutputType = {
    id: number
    idMateria: number
    dias: number
    horaInicio: number
    duracionMinutos: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type DiasHorariosClasesAvgAggregateInputType = {
    id?: true
    idMateria?: true
    duracionMinutos?: true
  }

  export type DiasHorariosClasesSumAggregateInputType = {
    id?: true
    idMateria?: true
    duracionMinutos?: true
  }

  export type DiasHorariosClasesMinAggregateInputType = {
    id?: true
    idMateria?: true
    horaInicio?: true
    duracionMinutos?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DiasHorariosClasesMaxAggregateInputType = {
    id?: true
    idMateria?: true
    horaInicio?: true
    duracionMinutos?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DiasHorariosClasesCountAggregateInputType = {
    id?: true
    idMateria?: true
    dias?: true
    horaInicio?: true
    duracionMinutos?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type DiasHorariosClasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiasHorariosClases to aggregate.
     */
    where?: DiasHorariosClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiasHorariosClases to fetch.
     */
    orderBy?: DiasHorariosClasesOrderByWithRelationInput | DiasHorariosClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiasHorariosClasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiasHorariosClases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiasHorariosClases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiasHorariosClases
    **/
    _count?: true | DiasHorariosClasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiasHorariosClasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiasHorariosClasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiasHorariosClasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiasHorariosClasesMaxAggregateInputType
  }

  export type GetDiasHorariosClasesAggregateType<T extends DiasHorariosClasesAggregateArgs> = {
        [P in keyof T & keyof AggregateDiasHorariosClases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiasHorariosClases[P]>
      : GetScalarType<T[P], AggregateDiasHorariosClases[P]>
  }




  export type DiasHorariosClasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiasHorariosClasesWhereInput
    orderBy?: DiasHorariosClasesOrderByWithAggregationInput | DiasHorariosClasesOrderByWithAggregationInput[]
    by: DiasHorariosClasesScalarFieldEnum[] | DiasHorariosClasesScalarFieldEnum
    having?: DiasHorariosClasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiasHorariosClasesCountAggregateInputType | true
    _avg?: DiasHorariosClasesAvgAggregateInputType
    _sum?: DiasHorariosClasesSumAggregateInputType
    _min?: DiasHorariosClasesMinAggregateInputType
    _max?: DiasHorariosClasesMaxAggregateInputType
  }

  export type DiasHorariosClasesGroupByOutputType = {
    id: number
    idMateria: number
    dias: $Enums.Dias[]
    horaInicio: string
    duracionMinutos: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: DiasHorariosClasesCountAggregateOutputType | null
    _avg: DiasHorariosClasesAvgAggregateOutputType | null
    _sum: DiasHorariosClasesSumAggregateOutputType | null
    _min: DiasHorariosClasesMinAggregateOutputType | null
    _max: DiasHorariosClasesMaxAggregateOutputType | null
  }

  type GetDiasHorariosClasesGroupByPayload<T extends DiasHorariosClasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiasHorariosClasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiasHorariosClasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiasHorariosClasesGroupByOutputType[P]>
            : GetScalarType<T[P], DiasHorariosClasesGroupByOutputType[P]>
        }
      >
    >


  export type DiasHorariosClasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idMateria?: boolean
    dias?: boolean
    horaInicio?: boolean
    duracionMinutos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    materia?: boolean | MateriasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diasHorariosClases"]>

  export type DiasHorariosClasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idMateria?: boolean
    dias?: boolean
    horaInicio?: boolean
    duracionMinutos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    materia?: boolean | MateriasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diasHorariosClases"]>

  export type DiasHorariosClasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idMateria?: boolean
    dias?: boolean
    horaInicio?: boolean
    duracionMinutos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    materia?: boolean | MateriasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diasHorariosClases"]>

  export type DiasHorariosClasesSelectScalar = {
    id?: boolean
    idMateria?: boolean
    dias?: boolean
    horaInicio?: boolean
    duracionMinutos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type DiasHorariosClasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idMateria" | "dias" | "horaInicio" | "duracionMinutos" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["diasHorariosClases"]>
  export type DiasHorariosClasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | MateriasDefaultArgs<ExtArgs>
  }
  export type DiasHorariosClasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | MateriasDefaultArgs<ExtArgs>
  }
  export type DiasHorariosClasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | MateriasDefaultArgs<ExtArgs>
  }

  export type $DiasHorariosClasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiasHorariosClases"
    objects: {
      materia: Prisma.$MateriasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idMateria: number
      dias: $Enums.Dias[]
      horaInicio: string
      duracionMinutos: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["diasHorariosClases"]>
    composites: {}
  }

  type DiasHorariosClasesGetPayload<S extends boolean | null | undefined | DiasHorariosClasesDefaultArgs> = $Result.GetResult<Prisma.$DiasHorariosClasesPayload, S>

  type DiasHorariosClasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiasHorariosClasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiasHorariosClasesCountAggregateInputType | true
    }

  export interface DiasHorariosClasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiasHorariosClases'], meta: { name: 'DiasHorariosClases' } }
    /**
     * Find zero or one DiasHorariosClases that matches the filter.
     * @param {DiasHorariosClasesFindUniqueArgs} args - Arguments to find a DiasHorariosClases
     * @example
     * // Get one DiasHorariosClases
     * const diasHorariosClases = await prisma.diasHorariosClases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiasHorariosClasesFindUniqueArgs>(args: SelectSubset<T, DiasHorariosClasesFindUniqueArgs<ExtArgs>>): Prisma__DiasHorariosClasesClient<$Result.GetResult<Prisma.$DiasHorariosClasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiasHorariosClases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiasHorariosClasesFindUniqueOrThrowArgs} args - Arguments to find a DiasHorariosClases
     * @example
     * // Get one DiasHorariosClases
     * const diasHorariosClases = await prisma.diasHorariosClases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiasHorariosClasesFindUniqueOrThrowArgs>(args: SelectSubset<T, DiasHorariosClasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiasHorariosClasesClient<$Result.GetResult<Prisma.$DiasHorariosClasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiasHorariosClases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiasHorariosClasesFindFirstArgs} args - Arguments to find a DiasHorariosClases
     * @example
     * // Get one DiasHorariosClases
     * const diasHorariosClases = await prisma.diasHorariosClases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiasHorariosClasesFindFirstArgs>(args?: SelectSubset<T, DiasHorariosClasesFindFirstArgs<ExtArgs>>): Prisma__DiasHorariosClasesClient<$Result.GetResult<Prisma.$DiasHorariosClasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiasHorariosClases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiasHorariosClasesFindFirstOrThrowArgs} args - Arguments to find a DiasHorariosClases
     * @example
     * // Get one DiasHorariosClases
     * const diasHorariosClases = await prisma.diasHorariosClases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiasHorariosClasesFindFirstOrThrowArgs>(args?: SelectSubset<T, DiasHorariosClasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiasHorariosClasesClient<$Result.GetResult<Prisma.$DiasHorariosClasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiasHorariosClases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiasHorariosClasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiasHorariosClases
     * const diasHorariosClases = await prisma.diasHorariosClases.findMany()
     * 
     * // Get first 10 DiasHorariosClases
     * const diasHorariosClases = await prisma.diasHorariosClases.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diasHorariosClasesWithIdOnly = await prisma.diasHorariosClases.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiasHorariosClasesFindManyArgs>(args?: SelectSubset<T, DiasHorariosClasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiasHorariosClasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiasHorariosClases.
     * @param {DiasHorariosClasesCreateArgs} args - Arguments to create a DiasHorariosClases.
     * @example
     * // Create one DiasHorariosClases
     * const DiasHorariosClases = await prisma.diasHorariosClases.create({
     *   data: {
     *     // ... data to create a DiasHorariosClases
     *   }
     * })
     * 
     */
    create<T extends DiasHorariosClasesCreateArgs>(args: SelectSubset<T, DiasHorariosClasesCreateArgs<ExtArgs>>): Prisma__DiasHorariosClasesClient<$Result.GetResult<Prisma.$DiasHorariosClasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiasHorariosClases.
     * @param {DiasHorariosClasesCreateManyArgs} args - Arguments to create many DiasHorariosClases.
     * @example
     * // Create many DiasHorariosClases
     * const diasHorariosClases = await prisma.diasHorariosClases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiasHorariosClasesCreateManyArgs>(args?: SelectSubset<T, DiasHorariosClasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiasHorariosClases and returns the data saved in the database.
     * @param {DiasHorariosClasesCreateManyAndReturnArgs} args - Arguments to create many DiasHorariosClases.
     * @example
     * // Create many DiasHorariosClases
     * const diasHorariosClases = await prisma.diasHorariosClases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiasHorariosClases and only return the `id`
     * const diasHorariosClasesWithIdOnly = await prisma.diasHorariosClases.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiasHorariosClasesCreateManyAndReturnArgs>(args?: SelectSubset<T, DiasHorariosClasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiasHorariosClasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiasHorariosClases.
     * @param {DiasHorariosClasesDeleteArgs} args - Arguments to delete one DiasHorariosClases.
     * @example
     * // Delete one DiasHorariosClases
     * const DiasHorariosClases = await prisma.diasHorariosClases.delete({
     *   where: {
     *     // ... filter to delete one DiasHorariosClases
     *   }
     * })
     * 
     */
    delete<T extends DiasHorariosClasesDeleteArgs>(args: SelectSubset<T, DiasHorariosClasesDeleteArgs<ExtArgs>>): Prisma__DiasHorariosClasesClient<$Result.GetResult<Prisma.$DiasHorariosClasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiasHorariosClases.
     * @param {DiasHorariosClasesUpdateArgs} args - Arguments to update one DiasHorariosClases.
     * @example
     * // Update one DiasHorariosClases
     * const diasHorariosClases = await prisma.diasHorariosClases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiasHorariosClasesUpdateArgs>(args: SelectSubset<T, DiasHorariosClasesUpdateArgs<ExtArgs>>): Prisma__DiasHorariosClasesClient<$Result.GetResult<Prisma.$DiasHorariosClasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiasHorariosClases.
     * @param {DiasHorariosClasesDeleteManyArgs} args - Arguments to filter DiasHorariosClases to delete.
     * @example
     * // Delete a few DiasHorariosClases
     * const { count } = await prisma.diasHorariosClases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiasHorariosClasesDeleteManyArgs>(args?: SelectSubset<T, DiasHorariosClasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiasHorariosClases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiasHorariosClasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiasHorariosClases
     * const diasHorariosClases = await prisma.diasHorariosClases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiasHorariosClasesUpdateManyArgs>(args: SelectSubset<T, DiasHorariosClasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiasHorariosClases and returns the data updated in the database.
     * @param {DiasHorariosClasesUpdateManyAndReturnArgs} args - Arguments to update many DiasHorariosClases.
     * @example
     * // Update many DiasHorariosClases
     * const diasHorariosClases = await prisma.diasHorariosClases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiasHorariosClases and only return the `id`
     * const diasHorariosClasesWithIdOnly = await prisma.diasHorariosClases.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiasHorariosClasesUpdateManyAndReturnArgs>(args: SelectSubset<T, DiasHorariosClasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiasHorariosClasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiasHorariosClases.
     * @param {DiasHorariosClasesUpsertArgs} args - Arguments to update or create a DiasHorariosClases.
     * @example
     * // Update or create a DiasHorariosClases
     * const diasHorariosClases = await prisma.diasHorariosClases.upsert({
     *   create: {
     *     // ... data to create a DiasHorariosClases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiasHorariosClases we want to update
     *   }
     * })
     */
    upsert<T extends DiasHorariosClasesUpsertArgs>(args: SelectSubset<T, DiasHorariosClasesUpsertArgs<ExtArgs>>): Prisma__DiasHorariosClasesClient<$Result.GetResult<Prisma.$DiasHorariosClasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiasHorariosClases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiasHorariosClasesCountArgs} args - Arguments to filter DiasHorariosClases to count.
     * @example
     * // Count the number of DiasHorariosClases
     * const count = await prisma.diasHorariosClases.count({
     *   where: {
     *     // ... the filter for the DiasHorariosClases we want to count
     *   }
     * })
    **/
    count<T extends DiasHorariosClasesCountArgs>(
      args?: Subset<T, DiasHorariosClasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiasHorariosClasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiasHorariosClases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiasHorariosClasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiasHorariosClasesAggregateArgs>(args: Subset<T, DiasHorariosClasesAggregateArgs>): Prisma.PrismaPromise<GetDiasHorariosClasesAggregateType<T>>

    /**
     * Group by DiasHorariosClases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiasHorariosClasesGroupByArgs} args - Group by arguments.
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
      T extends DiasHorariosClasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiasHorariosClasesGroupByArgs['orderBy'] }
        : { orderBy?: DiasHorariosClasesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiasHorariosClasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiasHorariosClasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiasHorariosClases model
   */
  readonly fields: DiasHorariosClasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiasHorariosClases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiasHorariosClasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materia<T extends MateriasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriasDefaultArgs<ExtArgs>>): Prisma__MateriasClient<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DiasHorariosClases model
   */
  interface DiasHorariosClasesFieldRefs {
    readonly id: FieldRef<"DiasHorariosClases", 'Int'>
    readonly idMateria: FieldRef<"DiasHorariosClases", 'Int'>
    readonly dias: FieldRef<"DiasHorariosClases", 'Dias[]'>
    readonly horaInicio: FieldRef<"DiasHorariosClases", 'String'>
    readonly duracionMinutos: FieldRef<"DiasHorariosClases", 'Int'>
    readonly createdAt: FieldRef<"DiasHorariosClases", 'DateTime'>
    readonly updatedAt: FieldRef<"DiasHorariosClases", 'DateTime'>
    readonly deletedAt: FieldRef<"DiasHorariosClases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiasHorariosClases findUnique
   */
  export type DiasHorariosClasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesInclude<ExtArgs> | null
    /**
     * Filter, which DiasHorariosClases to fetch.
     */
    where: DiasHorariosClasesWhereUniqueInput
  }

  /**
   * DiasHorariosClases findUniqueOrThrow
   */
  export type DiasHorariosClasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesInclude<ExtArgs> | null
    /**
     * Filter, which DiasHorariosClases to fetch.
     */
    where: DiasHorariosClasesWhereUniqueInput
  }

  /**
   * DiasHorariosClases findFirst
   */
  export type DiasHorariosClasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesInclude<ExtArgs> | null
    /**
     * Filter, which DiasHorariosClases to fetch.
     */
    where?: DiasHorariosClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiasHorariosClases to fetch.
     */
    orderBy?: DiasHorariosClasesOrderByWithRelationInput | DiasHorariosClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiasHorariosClases.
     */
    cursor?: DiasHorariosClasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiasHorariosClases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiasHorariosClases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiasHorariosClases.
     */
    distinct?: DiasHorariosClasesScalarFieldEnum | DiasHorariosClasesScalarFieldEnum[]
  }

  /**
   * DiasHorariosClases findFirstOrThrow
   */
  export type DiasHorariosClasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesInclude<ExtArgs> | null
    /**
     * Filter, which DiasHorariosClases to fetch.
     */
    where?: DiasHorariosClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiasHorariosClases to fetch.
     */
    orderBy?: DiasHorariosClasesOrderByWithRelationInput | DiasHorariosClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiasHorariosClases.
     */
    cursor?: DiasHorariosClasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiasHorariosClases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiasHorariosClases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiasHorariosClases.
     */
    distinct?: DiasHorariosClasesScalarFieldEnum | DiasHorariosClasesScalarFieldEnum[]
  }

  /**
   * DiasHorariosClases findMany
   */
  export type DiasHorariosClasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesInclude<ExtArgs> | null
    /**
     * Filter, which DiasHorariosClases to fetch.
     */
    where?: DiasHorariosClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiasHorariosClases to fetch.
     */
    orderBy?: DiasHorariosClasesOrderByWithRelationInput | DiasHorariosClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiasHorariosClases.
     */
    cursor?: DiasHorariosClasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiasHorariosClases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiasHorariosClases.
     */
    skip?: number
    distinct?: DiasHorariosClasesScalarFieldEnum | DiasHorariosClasesScalarFieldEnum[]
  }

  /**
   * DiasHorariosClases create
   */
  export type DiasHorariosClasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesInclude<ExtArgs> | null
    /**
     * The data needed to create a DiasHorariosClases.
     */
    data: XOR<DiasHorariosClasesCreateInput, DiasHorariosClasesUncheckedCreateInput>
  }

  /**
   * DiasHorariosClases createMany
   */
  export type DiasHorariosClasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiasHorariosClases.
     */
    data: DiasHorariosClasesCreateManyInput | DiasHorariosClasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiasHorariosClases createManyAndReturn
   */
  export type DiasHorariosClasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * The data used to create many DiasHorariosClases.
     */
    data: DiasHorariosClasesCreateManyInput | DiasHorariosClasesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiasHorariosClases update
   */
  export type DiasHorariosClasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesInclude<ExtArgs> | null
    /**
     * The data needed to update a DiasHorariosClases.
     */
    data: XOR<DiasHorariosClasesUpdateInput, DiasHorariosClasesUncheckedUpdateInput>
    /**
     * Choose, which DiasHorariosClases to update.
     */
    where: DiasHorariosClasesWhereUniqueInput
  }

  /**
   * DiasHorariosClases updateMany
   */
  export type DiasHorariosClasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiasHorariosClases.
     */
    data: XOR<DiasHorariosClasesUpdateManyMutationInput, DiasHorariosClasesUncheckedUpdateManyInput>
    /**
     * Filter which DiasHorariosClases to update
     */
    where?: DiasHorariosClasesWhereInput
    /**
     * Limit how many DiasHorariosClases to update.
     */
    limit?: number
  }

  /**
   * DiasHorariosClases updateManyAndReturn
   */
  export type DiasHorariosClasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * The data used to update DiasHorariosClases.
     */
    data: XOR<DiasHorariosClasesUpdateManyMutationInput, DiasHorariosClasesUncheckedUpdateManyInput>
    /**
     * Filter which DiasHorariosClases to update
     */
    where?: DiasHorariosClasesWhereInput
    /**
     * Limit how many DiasHorariosClases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiasHorariosClases upsert
   */
  export type DiasHorariosClasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesInclude<ExtArgs> | null
    /**
     * The filter to search for the DiasHorariosClases to update in case it exists.
     */
    where: DiasHorariosClasesWhereUniqueInput
    /**
     * In case the DiasHorariosClases found by the `where` argument doesn't exist, create a new DiasHorariosClases with this data.
     */
    create: XOR<DiasHorariosClasesCreateInput, DiasHorariosClasesUncheckedCreateInput>
    /**
     * In case the DiasHorariosClases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiasHorariosClasesUpdateInput, DiasHorariosClasesUncheckedUpdateInput>
  }

  /**
   * DiasHorariosClases delete
   */
  export type DiasHorariosClasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesInclude<ExtArgs> | null
    /**
     * Filter which DiasHorariosClases to delete.
     */
    where: DiasHorariosClasesWhereUniqueInput
  }

  /**
   * DiasHorariosClases deleteMany
   */
  export type DiasHorariosClasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiasHorariosClases to delete
     */
    where?: DiasHorariosClasesWhereInput
    /**
     * Limit how many DiasHorariosClases to delete.
     */
    limit?: number
  }

  /**
   * DiasHorariosClases without action
   */
  export type DiasHorariosClasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiasHorariosClases
     */
    select?: DiasHorariosClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiasHorariosClases
     */
    omit?: DiasHorariosClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiasHorariosClasesInclude<ExtArgs> | null
  }


  /**
   * Model Cursos
   */

  export type AggregateCursos = {
    _count: CursosCountAggregateOutputType | null
    _avg: CursosAvgAggregateOutputType | null
    _sum: CursosSumAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  export type CursosAvgAggregateOutputType = {
    id: number | null
  }

  export type CursosSumAggregateOutputType = {
    id: number | null
  }

  export type CursosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    turno: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CursosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    turno: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CursosCountAggregateOutputType = {
    id: number
    nombre: number
    turno: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CursosAvgAggregateInputType = {
    id?: true
  }

  export type CursosSumAggregateInputType = {
    id?: true
  }

  export type CursosMinAggregateInputType = {
    id?: true
    nombre?: true
    turno?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CursosMaxAggregateInputType = {
    id?: true
    nombre?: true
    turno?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CursosCountAggregateInputType = {
    id?: true
    nombre?: true
    turno?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CursosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to aggregate.
     */
    where?: CursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursosOrderByWithRelationInput | CursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursosWhereUniqueInput
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
    _count?: true | CursosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursosMaxAggregateInputType
  }

  export type GetCursosAggregateType<T extends CursosAggregateArgs> = {
        [P in keyof T & keyof AggregateCursos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCursos[P]>
      : GetScalarType<T[P], AggregateCursos[P]>
  }




  export type CursosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursosWhereInput
    orderBy?: CursosOrderByWithAggregationInput | CursosOrderByWithAggregationInput[]
    by: CursosScalarFieldEnum[] | CursosScalarFieldEnum
    having?: CursosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursosCountAggregateInputType | true
    _avg?: CursosAvgAggregateInputType
    _sum?: CursosSumAggregateInputType
    _min?: CursosMinAggregateInputType
    _max?: CursosMaxAggregateInputType
  }

  export type CursosGroupByOutputType = {
    id: number
    nombre: string
    turno: string | null
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: CursosCountAggregateOutputType | null
    _avg: CursosAvgAggregateOutputType | null
    _sum: CursosSumAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  type GetCursosGroupByPayload<T extends CursosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursosGroupByOutputType[P]>
            : GetScalarType<T[P], CursosGroupByOutputType[P]>
        }
      >
    >


  export type CursosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    turno?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Materias?: boolean | Cursos$MateriasArgs<ExtArgs>
    Alumnos?: boolean | Cursos$AlumnosArgs<ExtArgs>
    _count?: boolean | CursosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cursos"]>

  export type CursosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    turno?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["cursos"]>

  export type CursosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    turno?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["cursos"]>

  export type CursosSelectScalar = {
    id?: boolean
    nombre?: boolean
    turno?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CursosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "turno" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["cursos"]>
  export type CursosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materias?: boolean | Cursos$MateriasArgs<ExtArgs>
    Alumnos?: boolean | Cursos$AlumnosArgs<ExtArgs>
    _count?: boolean | CursosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CursosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CursosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CursosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cursos"
    objects: {
      Materias: Prisma.$MateriasPayload<ExtArgs>[]
      Alumnos: Prisma.$AlumnosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      turno: string | null
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["cursos"]>
    composites: {}
  }

  type CursosGetPayload<S extends boolean | null | undefined | CursosDefaultArgs> = $Result.GetResult<Prisma.$CursosPayload, S>

  type CursosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursosCountAggregateInputType | true
    }

  export interface CursosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cursos'], meta: { name: 'Cursos' } }
    /**
     * Find zero or one Cursos that matches the filter.
     * @param {CursosFindUniqueArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursosFindUniqueArgs>(args: SelectSubset<T, CursosFindUniqueArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cursos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursosFindUniqueOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursosFindUniqueOrThrowArgs>(args: SelectSubset<T, CursosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosFindFirstArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursosFindFirstArgs>(args?: SelectSubset<T, CursosFindFirstArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosFindFirstOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursosFindFirstOrThrowArgs>(args?: SelectSubset<T, CursosFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.cursos.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.cursos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursosWithIdOnly = await prisma.cursos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursosFindManyArgs>(args?: SelectSubset<T, CursosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cursos.
     * @param {CursosCreateArgs} args - Arguments to create a Cursos.
     * @example
     * // Create one Cursos
     * const Cursos = await prisma.cursos.create({
     *   data: {
     *     // ... data to create a Cursos
     *   }
     * })
     * 
     */
    create<T extends CursosCreateArgs>(args: SelectSubset<T, CursosCreateArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursosCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const cursos = await prisma.cursos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursosCreateManyArgs>(args?: SelectSubset<T, CursosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {CursosCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const cursos = await prisma.cursos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `id`
     * const cursosWithIdOnly = await prisma.cursos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursosCreateManyAndReturnArgs>(args?: SelectSubset<T, CursosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cursos.
     * @param {CursosDeleteArgs} args - Arguments to delete one Cursos.
     * @example
     * // Delete one Cursos
     * const Cursos = await prisma.cursos.delete({
     *   where: {
     *     // ... filter to delete one Cursos
     *   }
     * })
     * 
     */
    delete<T extends CursosDeleteArgs>(args: SelectSubset<T, CursosDeleteArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cursos.
     * @param {CursosUpdateArgs} args - Arguments to update one Cursos.
     * @example
     * // Update one Cursos
     * const cursos = await prisma.cursos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursosUpdateArgs>(args: SelectSubset<T, CursosUpdateArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursosDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.cursos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursosDeleteManyArgs>(args?: SelectSubset<T, CursosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const cursos = await prisma.cursos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursosUpdateManyArgs>(args: SelectSubset<T, CursosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos and returns the data updated in the database.
     * @param {CursosUpdateManyAndReturnArgs} args - Arguments to update many Cursos.
     * @example
     * // Update many Cursos
     * const cursos = await prisma.cursos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursos and only return the `id`
     * const cursosWithIdOnly = await prisma.cursos.updateManyAndReturn({
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
    updateManyAndReturn<T extends CursosUpdateManyAndReturnArgs>(args: SelectSubset<T, CursosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cursos.
     * @param {CursosUpsertArgs} args - Arguments to update or create a Cursos.
     * @example
     * // Update or create a Cursos
     * const cursos = await prisma.cursos.upsert({
     *   create: {
     *     // ... data to create a Cursos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cursos we want to update
     *   }
     * })
     */
    upsert<T extends CursosUpsertArgs>(args: SelectSubset<T, CursosUpsertArgs<ExtArgs>>): Prisma__CursosClient<$Result.GetResult<Prisma.$CursosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.cursos.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursosCountArgs>(
      args?: Subset<T, CursosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CursosAggregateArgs>(args: Subset<T, CursosAggregateArgs>): Prisma.PrismaPromise<GetCursosAggregateType<T>>

    /**
     * Group by Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosGroupByArgs} args - Group by arguments.
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
      T extends CursosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursosGroupByArgs['orderBy'] }
        : { orderBy?: CursosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CursosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cursos model
   */
  readonly fields: CursosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cursos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Materias<T extends Cursos$MateriasArgs<ExtArgs> = {}>(args?: Subset<T, Cursos$MateriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Alumnos<T extends Cursos$AlumnosArgs<ExtArgs> = {}>(args?: Subset<T, Cursos$AlumnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cursos model
   */
  interface CursosFieldRefs {
    readonly id: FieldRef<"Cursos", 'Int'>
    readonly nombre: FieldRef<"Cursos", 'String'>
    readonly turno: FieldRef<"Cursos", 'String'>
    readonly createdAt: FieldRef<"Cursos", 'DateTime'>
    readonly updatedAt: FieldRef<"Cursos", 'DateTime'>
    readonly deletedAt: FieldRef<"Cursos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cursos findUnique
   */
  export type CursosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where: CursosWhereUniqueInput
  }

  /**
   * Cursos findUniqueOrThrow
   */
  export type CursosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where: CursosWhereUniqueInput
  }

  /**
   * Cursos findFirst
   */
  export type CursosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursosOrderByWithRelationInput | CursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursosWhereUniqueInput
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
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * Cursos findFirstOrThrow
   */
  export type CursosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursosOrderByWithRelationInput | CursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursosWhereUniqueInput
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
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * Cursos findMany
   */
  export type CursosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursosOrderByWithRelationInput | CursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursosWhereUniqueInput
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
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * Cursos create
   */
  export type CursosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * The data needed to create a Cursos.
     */
    data: XOR<CursosCreateInput, CursosUncheckedCreateInput>
  }

  /**
   * Cursos createMany
   */
  export type CursosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursosCreateManyInput | CursosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cursos createManyAndReturn
   */
  export type CursosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * The data used to create many Cursos.
     */
    data: CursosCreateManyInput | CursosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cursos update
   */
  export type CursosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * The data needed to update a Cursos.
     */
    data: XOR<CursosUpdateInput, CursosUncheckedUpdateInput>
    /**
     * Choose, which Cursos to update.
     */
    where: CursosWhereUniqueInput
  }

  /**
   * Cursos updateMany
   */
  export type CursosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursosUpdateManyMutationInput, CursosUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursosWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Cursos updateManyAndReturn
   */
  export type CursosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursosUpdateManyMutationInput, CursosUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursosWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Cursos upsert
   */
  export type CursosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * The filter to search for the Cursos to update in case it exists.
     */
    where: CursosWhereUniqueInput
    /**
     * In case the Cursos found by the `where` argument doesn't exist, create a new Cursos with this data.
     */
    create: XOR<CursosCreateInput, CursosUncheckedCreateInput>
    /**
     * In case the Cursos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursosUpdateInput, CursosUncheckedUpdateInput>
  }

  /**
   * Cursos delete
   */
  export type CursosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
    /**
     * Filter which Cursos to delete.
     */
    where: CursosWhereUniqueInput
  }

  /**
   * Cursos deleteMany
   */
  export type CursosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursosWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Cursos.Materias
   */
  export type Cursos$MateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materias
     */
    select?: MateriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materias
     */
    omit?: MateriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriasInclude<ExtArgs> | null
    where?: MateriasWhereInput
    orderBy?: MateriasOrderByWithRelationInput | MateriasOrderByWithRelationInput[]
    cursor?: MateriasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriasScalarFieldEnum | MateriasScalarFieldEnum[]
  }

  /**
   * Cursos.Alumnos
   */
  export type Cursos$AlumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alumnos
     */
    omit?: AlumnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnosInclude<ExtArgs> | null
    where?: AlumnosWhereInput
    orderBy?: AlumnosOrderByWithRelationInput | AlumnosOrderByWithRelationInput[]
    cursor?: AlumnosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlumnosScalarFieldEnum | AlumnosScalarFieldEnum[]
  }

  /**
   * Cursos without action
   */
  export type CursosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursos
     */
    select?: CursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursos
     */
    omit?: CursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursosInclude<ExtArgs> | null
  }


  /**
   * Model FechaNoLectivas
   */

  export type AggregateFechaNoLectivas = {
    _count: FechaNoLectivasCountAggregateOutputType | null
    _avg: FechaNoLectivasAvgAggregateOutputType | null
    _sum: FechaNoLectivasSumAggregateOutputType | null
    _min: FechaNoLectivasMinAggregateOutputType | null
    _max: FechaNoLectivasMaxAggregateOutputType | null
  }

  export type FechaNoLectivasAvgAggregateOutputType = {
    id: number | null
  }

  export type FechaNoLectivasSumAggregateOutputType = {
    id: number | null
  }

  export type FechaNoLectivasMinAggregateOutputType = {
    id: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    motivo: string | null
  }

  export type FechaNoLectivasMaxAggregateOutputType = {
    id: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    motivo: string | null
  }

  export type FechaNoLectivasCountAggregateOutputType = {
    id: number
    fechaInicio: number
    fechaFin: number
    motivo: number
    _all: number
  }


  export type FechaNoLectivasAvgAggregateInputType = {
    id?: true
  }

  export type FechaNoLectivasSumAggregateInputType = {
    id?: true
  }

  export type FechaNoLectivasMinAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaFin?: true
    motivo?: true
  }

  export type FechaNoLectivasMaxAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaFin?: true
    motivo?: true
  }

  export type FechaNoLectivasCountAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaFin?: true
    motivo?: true
    _all?: true
  }

  export type FechaNoLectivasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FechaNoLectivas to aggregate.
     */
    where?: FechaNoLectivasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FechaNoLectivas to fetch.
     */
    orderBy?: FechaNoLectivasOrderByWithRelationInput | FechaNoLectivasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FechaNoLectivasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FechaNoLectivas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FechaNoLectivas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FechaNoLectivas
    **/
    _count?: true | FechaNoLectivasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FechaNoLectivasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FechaNoLectivasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FechaNoLectivasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FechaNoLectivasMaxAggregateInputType
  }

  export type GetFechaNoLectivasAggregateType<T extends FechaNoLectivasAggregateArgs> = {
        [P in keyof T & keyof AggregateFechaNoLectivas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFechaNoLectivas[P]>
      : GetScalarType<T[P], AggregateFechaNoLectivas[P]>
  }




  export type FechaNoLectivasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FechaNoLectivasWhereInput
    orderBy?: FechaNoLectivasOrderByWithAggregationInput | FechaNoLectivasOrderByWithAggregationInput[]
    by: FechaNoLectivasScalarFieldEnum[] | FechaNoLectivasScalarFieldEnum
    having?: FechaNoLectivasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FechaNoLectivasCountAggregateInputType | true
    _avg?: FechaNoLectivasAvgAggregateInputType
    _sum?: FechaNoLectivasSumAggregateInputType
    _min?: FechaNoLectivasMinAggregateInputType
    _max?: FechaNoLectivasMaxAggregateInputType
  }

  export type FechaNoLectivasGroupByOutputType = {
    id: number
    fechaInicio: Date
    fechaFin: Date
    motivo: string
    _count: FechaNoLectivasCountAggregateOutputType | null
    _avg: FechaNoLectivasAvgAggregateOutputType | null
    _sum: FechaNoLectivasSumAggregateOutputType | null
    _min: FechaNoLectivasMinAggregateOutputType | null
    _max: FechaNoLectivasMaxAggregateOutputType | null
  }

  type GetFechaNoLectivasGroupByPayload<T extends FechaNoLectivasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FechaNoLectivasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FechaNoLectivasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FechaNoLectivasGroupByOutputType[P]>
            : GetScalarType<T[P], FechaNoLectivasGroupByOutputType[P]>
        }
      >
    >


  export type FechaNoLectivasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    motivo?: boolean
  }, ExtArgs["result"]["fechaNoLectivas"]>

  export type FechaNoLectivasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    motivo?: boolean
  }, ExtArgs["result"]["fechaNoLectivas"]>

  export type FechaNoLectivasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    motivo?: boolean
  }, ExtArgs["result"]["fechaNoLectivas"]>

  export type FechaNoLectivasSelectScalar = {
    id?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    motivo?: boolean
  }

  export type FechaNoLectivasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaInicio" | "fechaFin" | "motivo", ExtArgs["result"]["fechaNoLectivas"]>

  export type $FechaNoLectivasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FechaNoLectivas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaInicio: Date
      fechaFin: Date
      motivo: string
    }, ExtArgs["result"]["fechaNoLectivas"]>
    composites: {}
  }

  type FechaNoLectivasGetPayload<S extends boolean | null | undefined | FechaNoLectivasDefaultArgs> = $Result.GetResult<Prisma.$FechaNoLectivasPayload, S>

  type FechaNoLectivasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FechaNoLectivasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FechaNoLectivasCountAggregateInputType | true
    }

  export interface FechaNoLectivasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FechaNoLectivas'], meta: { name: 'FechaNoLectivas' } }
    /**
     * Find zero or one FechaNoLectivas that matches the filter.
     * @param {FechaNoLectivasFindUniqueArgs} args - Arguments to find a FechaNoLectivas
     * @example
     * // Get one FechaNoLectivas
     * const fechaNoLectivas = await prisma.fechaNoLectivas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FechaNoLectivasFindUniqueArgs>(args: SelectSubset<T, FechaNoLectivasFindUniqueArgs<ExtArgs>>): Prisma__FechaNoLectivasClient<$Result.GetResult<Prisma.$FechaNoLectivasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FechaNoLectivas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FechaNoLectivasFindUniqueOrThrowArgs} args - Arguments to find a FechaNoLectivas
     * @example
     * // Get one FechaNoLectivas
     * const fechaNoLectivas = await prisma.fechaNoLectivas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FechaNoLectivasFindUniqueOrThrowArgs>(args: SelectSubset<T, FechaNoLectivasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FechaNoLectivasClient<$Result.GetResult<Prisma.$FechaNoLectivasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FechaNoLectivas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaNoLectivasFindFirstArgs} args - Arguments to find a FechaNoLectivas
     * @example
     * // Get one FechaNoLectivas
     * const fechaNoLectivas = await prisma.fechaNoLectivas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FechaNoLectivasFindFirstArgs>(args?: SelectSubset<T, FechaNoLectivasFindFirstArgs<ExtArgs>>): Prisma__FechaNoLectivasClient<$Result.GetResult<Prisma.$FechaNoLectivasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FechaNoLectivas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaNoLectivasFindFirstOrThrowArgs} args - Arguments to find a FechaNoLectivas
     * @example
     * // Get one FechaNoLectivas
     * const fechaNoLectivas = await prisma.fechaNoLectivas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FechaNoLectivasFindFirstOrThrowArgs>(args?: SelectSubset<T, FechaNoLectivasFindFirstOrThrowArgs<ExtArgs>>): Prisma__FechaNoLectivasClient<$Result.GetResult<Prisma.$FechaNoLectivasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FechaNoLectivas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaNoLectivasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FechaNoLectivas
     * const fechaNoLectivas = await prisma.fechaNoLectivas.findMany()
     * 
     * // Get first 10 FechaNoLectivas
     * const fechaNoLectivas = await prisma.fechaNoLectivas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fechaNoLectivasWithIdOnly = await prisma.fechaNoLectivas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FechaNoLectivasFindManyArgs>(args?: SelectSubset<T, FechaNoLectivasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FechaNoLectivasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FechaNoLectivas.
     * @param {FechaNoLectivasCreateArgs} args - Arguments to create a FechaNoLectivas.
     * @example
     * // Create one FechaNoLectivas
     * const FechaNoLectivas = await prisma.fechaNoLectivas.create({
     *   data: {
     *     // ... data to create a FechaNoLectivas
     *   }
     * })
     * 
     */
    create<T extends FechaNoLectivasCreateArgs>(args: SelectSubset<T, FechaNoLectivasCreateArgs<ExtArgs>>): Prisma__FechaNoLectivasClient<$Result.GetResult<Prisma.$FechaNoLectivasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FechaNoLectivas.
     * @param {FechaNoLectivasCreateManyArgs} args - Arguments to create many FechaNoLectivas.
     * @example
     * // Create many FechaNoLectivas
     * const fechaNoLectivas = await prisma.fechaNoLectivas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FechaNoLectivasCreateManyArgs>(args?: SelectSubset<T, FechaNoLectivasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FechaNoLectivas and returns the data saved in the database.
     * @param {FechaNoLectivasCreateManyAndReturnArgs} args - Arguments to create many FechaNoLectivas.
     * @example
     * // Create many FechaNoLectivas
     * const fechaNoLectivas = await prisma.fechaNoLectivas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FechaNoLectivas and only return the `id`
     * const fechaNoLectivasWithIdOnly = await prisma.fechaNoLectivas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FechaNoLectivasCreateManyAndReturnArgs>(args?: SelectSubset<T, FechaNoLectivasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FechaNoLectivasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FechaNoLectivas.
     * @param {FechaNoLectivasDeleteArgs} args - Arguments to delete one FechaNoLectivas.
     * @example
     * // Delete one FechaNoLectivas
     * const FechaNoLectivas = await prisma.fechaNoLectivas.delete({
     *   where: {
     *     // ... filter to delete one FechaNoLectivas
     *   }
     * })
     * 
     */
    delete<T extends FechaNoLectivasDeleteArgs>(args: SelectSubset<T, FechaNoLectivasDeleteArgs<ExtArgs>>): Prisma__FechaNoLectivasClient<$Result.GetResult<Prisma.$FechaNoLectivasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FechaNoLectivas.
     * @param {FechaNoLectivasUpdateArgs} args - Arguments to update one FechaNoLectivas.
     * @example
     * // Update one FechaNoLectivas
     * const fechaNoLectivas = await prisma.fechaNoLectivas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FechaNoLectivasUpdateArgs>(args: SelectSubset<T, FechaNoLectivasUpdateArgs<ExtArgs>>): Prisma__FechaNoLectivasClient<$Result.GetResult<Prisma.$FechaNoLectivasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FechaNoLectivas.
     * @param {FechaNoLectivasDeleteManyArgs} args - Arguments to filter FechaNoLectivas to delete.
     * @example
     * // Delete a few FechaNoLectivas
     * const { count } = await prisma.fechaNoLectivas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FechaNoLectivasDeleteManyArgs>(args?: SelectSubset<T, FechaNoLectivasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FechaNoLectivas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaNoLectivasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FechaNoLectivas
     * const fechaNoLectivas = await prisma.fechaNoLectivas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FechaNoLectivasUpdateManyArgs>(args: SelectSubset<T, FechaNoLectivasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FechaNoLectivas and returns the data updated in the database.
     * @param {FechaNoLectivasUpdateManyAndReturnArgs} args - Arguments to update many FechaNoLectivas.
     * @example
     * // Update many FechaNoLectivas
     * const fechaNoLectivas = await prisma.fechaNoLectivas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FechaNoLectivas and only return the `id`
     * const fechaNoLectivasWithIdOnly = await prisma.fechaNoLectivas.updateManyAndReturn({
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
    updateManyAndReturn<T extends FechaNoLectivasUpdateManyAndReturnArgs>(args: SelectSubset<T, FechaNoLectivasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FechaNoLectivasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FechaNoLectivas.
     * @param {FechaNoLectivasUpsertArgs} args - Arguments to update or create a FechaNoLectivas.
     * @example
     * // Update or create a FechaNoLectivas
     * const fechaNoLectivas = await prisma.fechaNoLectivas.upsert({
     *   create: {
     *     // ... data to create a FechaNoLectivas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FechaNoLectivas we want to update
     *   }
     * })
     */
    upsert<T extends FechaNoLectivasUpsertArgs>(args: SelectSubset<T, FechaNoLectivasUpsertArgs<ExtArgs>>): Prisma__FechaNoLectivasClient<$Result.GetResult<Prisma.$FechaNoLectivasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FechaNoLectivas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaNoLectivasCountArgs} args - Arguments to filter FechaNoLectivas to count.
     * @example
     * // Count the number of FechaNoLectivas
     * const count = await prisma.fechaNoLectivas.count({
     *   where: {
     *     // ... the filter for the FechaNoLectivas we want to count
     *   }
     * })
    **/
    count<T extends FechaNoLectivasCountArgs>(
      args?: Subset<T, FechaNoLectivasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FechaNoLectivasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FechaNoLectivas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaNoLectivasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FechaNoLectivasAggregateArgs>(args: Subset<T, FechaNoLectivasAggregateArgs>): Prisma.PrismaPromise<GetFechaNoLectivasAggregateType<T>>

    /**
     * Group by FechaNoLectivas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaNoLectivasGroupByArgs} args - Group by arguments.
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
      T extends FechaNoLectivasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FechaNoLectivasGroupByArgs['orderBy'] }
        : { orderBy?: FechaNoLectivasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FechaNoLectivasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFechaNoLectivasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FechaNoLectivas model
   */
  readonly fields: FechaNoLectivasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FechaNoLectivas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FechaNoLectivasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FechaNoLectivas model
   */
  interface FechaNoLectivasFieldRefs {
    readonly id: FieldRef<"FechaNoLectivas", 'Int'>
    readonly fechaInicio: FieldRef<"FechaNoLectivas", 'DateTime'>
    readonly fechaFin: FieldRef<"FechaNoLectivas", 'DateTime'>
    readonly motivo: FieldRef<"FechaNoLectivas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FechaNoLectivas findUnique
   */
  export type FechaNoLectivasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaNoLectivas
     */
    select?: FechaNoLectivasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FechaNoLectivas
     */
    omit?: FechaNoLectivasOmit<ExtArgs> | null
    /**
     * Filter, which FechaNoLectivas to fetch.
     */
    where: FechaNoLectivasWhereUniqueInput
  }

  /**
   * FechaNoLectivas findUniqueOrThrow
   */
  export type FechaNoLectivasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaNoLectivas
     */
    select?: FechaNoLectivasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FechaNoLectivas
     */
    omit?: FechaNoLectivasOmit<ExtArgs> | null
    /**
     * Filter, which FechaNoLectivas to fetch.
     */
    where: FechaNoLectivasWhereUniqueInput
  }

  /**
   * FechaNoLectivas findFirst
   */
  export type FechaNoLectivasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaNoLectivas
     */
    select?: FechaNoLectivasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FechaNoLectivas
     */
    omit?: FechaNoLectivasOmit<ExtArgs> | null
    /**
     * Filter, which FechaNoLectivas to fetch.
     */
    where?: FechaNoLectivasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FechaNoLectivas to fetch.
     */
    orderBy?: FechaNoLectivasOrderByWithRelationInput | FechaNoLectivasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FechaNoLectivas.
     */
    cursor?: FechaNoLectivasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FechaNoLectivas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FechaNoLectivas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FechaNoLectivas.
     */
    distinct?: FechaNoLectivasScalarFieldEnum | FechaNoLectivasScalarFieldEnum[]
  }

  /**
   * FechaNoLectivas findFirstOrThrow
   */
  export type FechaNoLectivasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaNoLectivas
     */
    select?: FechaNoLectivasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FechaNoLectivas
     */
    omit?: FechaNoLectivasOmit<ExtArgs> | null
    /**
     * Filter, which FechaNoLectivas to fetch.
     */
    where?: FechaNoLectivasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FechaNoLectivas to fetch.
     */
    orderBy?: FechaNoLectivasOrderByWithRelationInput | FechaNoLectivasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FechaNoLectivas.
     */
    cursor?: FechaNoLectivasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FechaNoLectivas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FechaNoLectivas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FechaNoLectivas.
     */
    distinct?: FechaNoLectivasScalarFieldEnum | FechaNoLectivasScalarFieldEnum[]
  }

  /**
   * FechaNoLectivas findMany
   */
  export type FechaNoLectivasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaNoLectivas
     */
    select?: FechaNoLectivasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FechaNoLectivas
     */
    omit?: FechaNoLectivasOmit<ExtArgs> | null
    /**
     * Filter, which FechaNoLectivas to fetch.
     */
    where?: FechaNoLectivasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FechaNoLectivas to fetch.
     */
    orderBy?: FechaNoLectivasOrderByWithRelationInput | FechaNoLectivasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FechaNoLectivas.
     */
    cursor?: FechaNoLectivasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FechaNoLectivas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FechaNoLectivas.
     */
    skip?: number
    distinct?: FechaNoLectivasScalarFieldEnum | FechaNoLectivasScalarFieldEnum[]
  }

  /**
   * FechaNoLectivas create
   */
  export type FechaNoLectivasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaNoLectivas
     */
    select?: FechaNoLectivasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FechaNoLectivas
     */
    omit?: FechaNoLectivasOmit<ExtArgs> | null
    /**
     * The data needed to create a FechaNoLectivas.
     */
    data: XOR<FechaNoLectivasCreateInput, FechaNoLectivasUncheckedCreateInput>
  }

  /**
   * FechaNoLectivas createMany
   */
  export type FechaNoLectivasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FechaNoLectivas.
     */
    data: FechaNoLectivasCreateManyInput | FechaNoLectivasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FechaNoLectivas createManyAndReturn
   */
  export type FechaNoLectivasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaNoLectivas
     */
    select?: FechaNoLectivasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FechaNoLectivas
     */
    omit?: FechaNoLectivasOmit<ExtArgs> | null
    /**
     * The data used to create many FechaNoLectivas.
     */
    data: FechaNoLectivasCreateManyInput | FechaNoLectivasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FechaNoLectivas update
   */
  export type FechaNoLectivasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaNoLectivas
     */
    select?: FechaNoLectivasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FechaNoLectivas
     */
    omit?: FechaNoLectivasOmit<ExtArgs> | null
    /**
     * The data needed to update a FechaNoLectivas.
     */
    data: XOR<FechaNoLectivasUpdateInput, FechaNoLectivasUncheckedUpdateInput>
    /**
     * Choose, which FechaNoLectivas to update.
     */
    where: FechaNoLectivasWhereUniqueInput
  }

  /**
   * FechaNoLectivas updateMany
   */
  export type FechaNoLectivasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FechaNoLectivas.
     */
    data: XOR<FechaNoLectivasUpdateManyMutationInput, FechaNoLectivasUncheckedUpdateManyInput>
    /**
     * Filter which FechaNoLectivas to update
     */
    where?: FechaNoLectivasWhereInput
    /**
     * Limit how many FechaNoLectivas to update.
     */
    limit?: number
  }

  /**
   * FechaNoLectivas updateManyAndReturn
   */
  export type FechaNoLectivasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaNoLectivas
     */
    select?: FechaNoLectivasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FechaNoLectivas
     */
    omit?: FechaNoLectivasOmit<ExtArgs> | null
    /**
     * The data used to update FechaNoLectivas.
     */
    data: XOR<FechaNoLectivasUpdateManyMutationInput, FechaNoLectivasUncheckedUpdateManyInput>
    /**
     * Filter which FechaNoLectivas to update
     */
    where?: FechaNoLectivasWhereInput
    /**
     * Limit how many FechaNoLectivas to update.
     */
    limit?: number
  }

  /**
   * FechaNoLectivas upsert
   */
  export type FechaNoLectivasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaNoLectivas
     */
    select?: FechaNoLectivasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FechaNoLectivas
     */
    omit?: FechaNoLectivasOmit<ExtArgs> | null
    /**
     * The filter to search for the FechaNoLectivas to update in case it exists.
     */
    where: FechaNoLectivasWhereUniqueInput
    /**
     * In case the FechaNoLectivas found by the `where` argument doesn't exist, create a new FechaNoLectivas with this data.
     */
    create: XOR<FechaNoLectivasCreateInput, FechaNoLectivasUncheckedCreateInput>
    /**
     * In case the FechaNoLectivas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FechaNoLectivasUpdateInput, FechaNoLectivasUncheckedUpdateInput>
  }

  /**
   * FechaNoLectivas delete
   */
  export type FechaNoLectivasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaNoLectivas
     */
    select?: FechaNoLectivasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FechaNoLectivas
     */
    omit?: FechaNoLectivasOmit<ExtArgs> | null
    /**
     * Filter which FechaNoLectivas to delete.
     */
    where: FechaNoLectivasWhereUniqueInput
  }

  /**
   * FechaNoLectivas deleteMany
   */
  export type FechaNoLectivasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FechaNoLectivas to delete
     */
    where?: FechaNoLectivasWhereInput
    /**
     * Limit how many FechaNoLectivas to delete.
     */
    limit?: number
  }

  /**
   * FechaNoLectivas without action
   */
  export type FechaNoLectivasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaNoLectivas
     */
    select?: FechaNoLectivasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FechaNoLectivas
     */
    omit?: FechaNoLectivasOmit<ExtArgs> | null
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


  export const AlumnosScalarFieldEnum: {
    id: 'id',
    legajo: 'legajo',
    nombre: 'nombre',
    apellido: 'apellido',
    celular: 'celular',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AlumnosScalarFieldEnum = (typeof AlumnosScalarFieldEnum)[keyof typeof AlumnosScalarFieldEnum]


  export const ClasesScalarFieldEnum: {
    id: 'id',
    fechaHora: 'fechaHora',
    idMateria: 'idMateria',
    suspendida: 'suspendida',
    motivo: 'motivo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ClasesScalarFieldEnum = (typeof ClasesScalarFieldEnum)[keyof typeof ClasesScalarFieldEnum]


  export const AsistenciasScalarFieldEnum: {
    id: 'id',
    idAlumno: 'idAlumno',
    idClase: 'idClase',
    estado: 'estado',
    nota: 'nota',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AsistenciasScalarFieldEnum = (typeof AsistenciasScalarFieldEnum)[keyof typeof AsistenciasScalarFieldEnum]


  export const UsersDocentesScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nombre: 'nombre',
    apellido: 'apellido',
    rol: 'rol',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UsersDocentesScalarFieldEnum = (typeof UsersDocentesScalarFieldEnum)[keyof typeof UsersDocentesScalarFieldEnum]


  export const MateriasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    idUserDocente: 'idUserDocente',
    idCurso: 'idCurso',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type MateriasScalarFieldEnum = (typeof MateriasScalarFieldEnum)[keyof typeof MateriasScalarFieldEnum]


  export const DiasHorariosClasesScalarFieldEnum: {
    id: 'id',
    idMateria: 'idMateria',
    dias: 'dias',
    horaInicio: 'horaInicio',
    duracionMinutos: 'duracionMinutos',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type DiasHorariosClasesScalarFieldEnum = (typeof DiasHorariosClasesScalarFieldEnum)[keyof typeof DiasHorariosClasesScalarFieldEnum]


  export const CursosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    turno: 'turno',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CursosScalarFieldEnum = (typeof CursosScalarFieldEnum)[keyof typeof CursosScalarFieldEnum]


  export const FechaNoLectivasScalarFieldEnum: {
    id: 'id',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    motivo: 'motivo'
  };

  export type FechaNoLectivasScalarFieldEnum = (typeof FechaNoLectivasScalarFieldEnum)[keyof typeof FechaNoLectivasScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Estados'
   */
  export type EnumEstadosFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estados'>
    


  /**
   * Reference to a field of type 'Estados[]'
   */
  export type ListEnumEstadosFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estados[]'>
    


  /**
   * Reference to a field of type 'Dias[]'
   */
  export type ListEnumDiasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Dias[]'>
    


  /**
   * Reference to a field of type 'Dias'
   */
  export type EnumDiasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Dias'>
    


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


  export type AlumnosWhereInput = {
    AND?: AlumnosWhereInput | AlumnosWhereInput[]
    OR?: AlumnosWhereInput[]
    NOT?: AlumnosWhereInput | AlumnosWhereInput[]
    id?: IntFilter<"Alumnos"> | number
    legajo?: StringFilter<"Alumnos"> | string
    nombre?: StringFilter<"Alumnos"> | string
    apellido?: StringFilter<"Alumnos"> | string
    celular?: StringFilter<"Alumnos"> | string
    createdAt?: DateTimeFilter<"Alumnos"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Alumnos"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Alumnos"> | Date | string | null
    Asistencias?: AsistenciasListRelationFilter
    Cursos?: CursosListRelationFilter
  }

  export type AlumnosOrderByWithRelationInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Asistencias?: AsistenciasOrderByRelationAggregateInput
    Cursos?: CursosOrderByRelationAggregateInput
  }

  export type AlumnosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlumnosWhereInput | AlumnosWhereInput[]
    OR?: AlumnosWhereInput[]
    NOT?: AlumnosWhereInput | AlumnosWhereInput[]
    legajo?: StringFilter<"Alumnos"> | string
    nombre?: StringFilter<"Alumnos"> | string
    apellido?: StringFilter<"Alumnos"> | string
    celular?: StringFilter<"Alumnos"> | string
    createdAt?: DateTimeFilter<"Alumnos"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Alumnos"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Alumnos"> | Date | string | null
    Asistencias?: AsistenciasListRelationFilter
    Cursos?: CursosListRelationFilter
  }, "id">

  export type AlumnosOrderByWithAggregationInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AlumnosCountOrderByAggregateInput
    _avg?: AlumnosAvgOrderByAggregateInput
    _max?: AlumnosMaxOrderByAggregateInput
    _min?: AlumnosMinOrderByAggregateInput
    _sum?: AlumnosSumOrderByAggregateInput
  }

  export type AlumnosScalarWhereWithAggregatesInput = {
    AND?: AlumnosScalarWhereWithAggregatesInput | AlumnosScalarWhereWithAggregatesInput[]
    OR?: AlumnosScalarWhereWithAggregatesInput[]
    NOT?: AlumnosScalarWhereWithAggregatesInput | AlumnosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alumnos"> | number
    legajo?: StringWithAggregatesFilter<"Alumnos"> | string
    nombre?: StringWithAggregatesFilter<"Alumnos"> | string
    apellido?: StringWithAggregatesFilter<"Alumnos"> | string
    celular?: StringWithAggregatesFilter<"Alumnos"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Alumnos"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Alumnos"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Alumnos"> | Date | string | null
  }

  export type ClasesWhereInput = {
    AND?: ClasesWhereInput | ClasesWhereInput[]
    OR?: ClasesWhereInput[]
    NOT?: ClasesWhereInput | ClasesWhereInput[]
    id?: IntFilter<"Clases"> | number
    fechaHora?: DateTimeFilter<"Clases"> | Date | string
    idMateria?: IntFilter<"Clases"> | number
    suspendida?: BoolFilter<"Clases"> | boolean
    motivo?: StringNullableFilter<"Clases"> | string | null
    createdAt?: DateTimeFilter<"Clases"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Clases"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Clases"> | Date | string | null
    materia?: XOR<MateriasScalarRelationFilter, MateriasWhereInput>
    Asistencias?: AsistenciasListRelationFilter
  }

  export type ClasesOrderByWithRelationInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    idMateria?: SortOrder
    suspendida?: SortOrder
    motivo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    materia?: MateriasOrderByWithRelationInput
    Asistencias?: AsistenciasOrderByRelationAggregateInput
  }

  export type ClasesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClasesWhereInput | ClasesWhereInput[]
    OR?: ClasesWhereInput[]
    NOT?: ClasesWhereInput | ClasesWhereInput[]
    fechaHora?: DateTimeFilter<"Clases"> | Date | string
    idMateria?: IntFilter<"Clases"> | number
    suspendida?: BoolFilter<"Clases"> | boolean
    motivo?: StringNullableFilter<"Clases"> | string | null
    createdAt?: DateTimeFilter<"Clases"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Clases"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Clases"> | Date | string | null
    materia?: XOR<MateriasScalarRelationFilter, MateriasWhereInput>
    Asistencias?: AsistenciasListRelationFilter
  }, "id">

  export type ClasesOrderByWithAggregationInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    idMateria?: SortOrder
    suspendida?: SortOrder
    motivo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ClasesCountOrderByAggregateInput
    _avg?: ClasesAvgOrderByAggregateInput
    _max?: ClasesMaxOrderByAggregateInput
    _min?: ClasesMinOrderByAggregateInput
    _sum?: ClasesSumOrderByAggregateInput
  }

  export type ClasesScalarWhereWithAggregatesInput = {
    AND?: ClasesScalarWhereWithAggregatesInput | ClasesScalarWhereWithAggregatesInput[]
    OR?: ClasesScalarWhereWithAggregatesInput[]
    NOT?: ClasesScalarWhereWithAggregatesInput | ClasesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clases"> | number
    fechaHora?: DateTimeWithAggregatesFilter<"Clases"> | Date | string
    idMateria?: IntWithAggregatesFilter<"Clases"> | number
    suspendida?: BoolWithAggregatesFilter<"Clases"> | boolean
    motivo?: StringNullableWithAggregatesFilter<"Clases"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Clases"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Clases"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Clases"> | Date | string | null
  }

  export type AsistenciasWhereInput = {
    AND?: AsistenciasWhereInput | AsistenciasWhereInput[]
    OR?: AsistenciasWhereInput[]
    NOT?: AsistenciasWhereInput | AsistenciasWhereInput[]
    id?: IntFilter<"Asistencias"> | number
    idAlumno?: IntFilter<"Asistencias"> | number
    idClase?: IntFilter<"Asistencias"> | number
    estado?: EnumEstadosFilter<"Asistencias"> | $Enums.Estados
    nota?: StringNullableFilter<"Asistencias"> | string | null
    createdAt?: DateTimeFilter<"Asistencias"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Asistencias"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Asistencias"> | Date | string | null
    alumno?: XOR<AlumnosScalarRelationFilter, AlumnosWhereInput>
    clase?: XOR<ClasesScalarRelationFilter, ClasesWhereInput>
  }

  export type AsistenciasOrderByWithRelationInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
    estado?: SortOrder
    nota?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    alumno?: AlumnosOrderByWithRelationInput
    clase?: ClasesOrderByWithRelationInput
  }

  export type AsistenciasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AsistenciasWhereInput | AsistenciasWhereInput[]
    OR?: AsistenciasWhereInput[]
    NOT?: AsistenciasWhereInput | AsistenciasWhereInput[]
    idAlumno?: IntFilter<"Asistencias"> | number
    idClase?: IntFilter<"Asistencias"> | number
    estado?: EnumEstadosFilter<"Asistencias"> | $Enums.Estados
    nota?: StringNullableFilter<"Asistencias"> | string | null
    createdAt?: DateTimeFilter<"Asistencias"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Asistencias"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Asistencias"> | Date | string | null
    alumno?: XOR<AlumnosScalarRelationFilter, AlumnosWhereInput>
    clase?: XOR<ClasesScalarRelationFilter, ClasesWhereInput>
  }, "id">

  export type AsistenciasOrderByWithAggregationInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
    estado?: SortOrder
    nota?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AsistenciasCountOrderByAggregateInput
    _avg?: AsistenciasAvgOrderByAggregateInput
    _max?: AsistenciasMaxOrderByAggregateInput
    _min?: AsistenciasMinOrderByAggregateInput
    _sum?: AsistenciasSumOrderByAggregateInput
  }

  export type AsistenciasScalarWhereWithAggregatesInput = {
    AND?: AsistenciasScalarWhereWithAggregatesInput | AsistenciasScalarWhereWithAggregatesInput[]
    OR?: AsistenciasScalarWhereWithAggregatesInput[]
    NOT?: AsistenciasScalarWhereWithAggregatesInput | AsistenciasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Asistencias"> | number
    idAlumno?: IntWithAggregatesFilter<"Asistencias"> | number
    idClase?: IntWithAggregatesFilter<"Asistencias"> | number
    estado?: EnumEstadosWithAggregatesFilter<"Asistencias"> | $Enums.Estados
    nota?: StringNullableWithAggregatesFilter<"Asistencias"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Asistencias"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Asistencias"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Asistencias"> | Date | string | null
  }

  export type UsersDocentesWhereInput = {
    AND?: UsersDocentesWhereInput | UsersDocentesWhereInput[]
    OR?: UsersDocentesWhereInput[]
    NOT?: UsersDocentesWhereInput | UsersDocentesWhereInput[]
    id?: IntFilter<"UsersDocentes"> | number
    email?: StringFilter<"UsersDocentes"> | string
    password?: StringFilter<"UsersDocentes"> | string
    nombre?: StringFilter<"UsersDocentes"> | string
    apellido?: StringFilter<"UsersDocentes"> | string
    rol?: StringFilter<"UsersDocentes"> | string
    createdAt?: DateTimeFilter<"UsersDocentes"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UsersDocentes"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UsersDocentes"> | Date | string | null
    Materias?: MateriasListRelationFilter
  }

  export type UsersDocentesOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Materias?: MateriasOrderByRelationAggregateInput
  }

  export type UsersDocentesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersDocentesWhereInput | UsersDocentesWhereInput[]
    OR?: UsersDocentesWhereInput[]
    NOT?: UsersDocentesWhereInput | UsersDocentesWhereInput[]
    password?: StringFilter<"UsersDocentes"> | string
    nombre?: StringFilter<"UsersDocentes"> | string
    apellido?: StringFilter<"UsersDocentes"> | string
    rol?: StringFilter<"UsersDocentes"> | string
    createdAt?: DateTimeFilter<"UsersDocentes"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UsersDocentes"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UsersDocentes"> | Date | string | null
    Materias?: MateriasListRelationFilter
  }, "id" | "email">

  export type UsersDocentesOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UsersDocentesCountOrderByAggregateInput
    _avg?: UsersDocentesAvgOrderByAggregateInput
    _max?: UsersDocentesMaxOrderByAggregateInput
    _min?: UsersDocentesMinOrderByAggregateInput
    _sum?: UsersDocentesSumOrderByAggregateInput
  }

  export type UsersDocentesScalarWhereWithAggregatesInput = {
    AND?: UsersDocentesScalarWhereWithAggregatesInput | UsersDocentesScalarWhereWithAggregatesInput[]
    OR?: UsersDocentesScalarWhereWithAggregatesInput[]
    NOT?: UsersDocentesScalarWhereWithAggregatesInput | UsersDocentesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsersDocentes"> | number
    email?: StringWithAggregatesFilter<"UsersDocentes"> | string
    password?: StringWithAggregatesFilter<"UsersDocentes"> | string
    nombre?: StringWithAggregatesFilter<"UsersDocentes"> | string
    apellido?: StringWithAggregatesFilter<"UsersDocentes"> | string
    rol?: StringWithAggregatesFilter<"UsersDocentes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UsersDocentes"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UsersDocentes"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UsersDocentes"> | Date | string | null
  }

  export type MateriasWhereInput = {
    AND?: MateriasWhereInput | MateriasWhereInput[]
    OR?: MateriasWhereInput[]
    NOT?: MateriasWhereInput | MateriasWhereInput[]
    id?: IntFilter<"Materias"> | number
    nombre?: StringFilter<"Materias"> | string
    idUserDocente?: IntFilter<"Materias"> | number
    idCurso?: IntFilter<"Materias"> | number
    fechaInicio?: DateTimeFilter<"Materias"> | Date | string
    fechaFin?: DateTimeFilter<"Materias"> | Date | string
    createdAt?: DateTimeFilter<"Materias"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Materias"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Materias"> | Date | string | null
    userDocente?: XOR<UsersDocentesScalarRelationFilter, UsersDocentesWhereInput>
    curso?: XOR<CursosScalarRelationFilter, CursosWhereInput>
    Clases?: ClasesListRelationFilter
    DiasHorariosClases?: DiasHorariosClasesListRelationFilter
  }

  export type MateriasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userDocente?: UsersDocentesOrderByWithRelationInput
    curso?: CursosOrderByWithRelationInput
    Clases?: ClasesOrderByRelationAggregateInput
    DiasHorariosClases?: DiasHorariosClasesOrderByRelationAggregateInput
  }

  export type MateriasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MateriasWhereInput | MateriasWhereInput[]
    OR?: MateriasWhereInput[]
    NOT?: MateriasWhereInput | MateriasWhereInput[]
    nombre?: StringFilter<"Materias"> | string
    idUserDocente?: IntFilter<"Materias"> | number
    idCurso?: IntFilter<"Materias"> | number
    fechaInicio?: DateTimeFilter<"Materias"> | Date | string
    fechaFin?: DateTimeFilter<"Materias"> | Date | string
    createdAt?: DateTimeFilter<"Materias"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Materias"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Materias"> | Date | string | null
    userDocente?: XOR<UsersDocentesScalarRelationFilter, UsersDocentesWhereInput>
    curso?: XOR<CursosScalarRelationFilter, CursosWhereInput>
    Clases?: ClasesListRelationFilter
    DiasHorariosClases?: DiasHorariosClasesListRelationFilter
  }, "id">

  export type MateriasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: MateriasCountOrderByAggregateInput
    _avg?: MateriasAvgOrderByAggregateInput
    _max?: MateriasMaxOrderByAggregateInput
    _min?: MateriasMinOrderByAggregateInput
    _sum?: MateriasSumOrderByAggregateInput
  }

  export type MateriasScalarWhereWithAggregatesInput = {
    AND?: MateriasScalarWhereWithAggregatesInput | MateriasScalarWhereWithAggregatesInput[]
    OR?: MateriasScalarWhereWithAggregatesInput[]
    NOT?: MateriasScalarWhereWithAggregatesInput | MateriasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Materias"> | number
    nombre?: StringWithAggregatesFilter<"Materias"> | string
    idUserDocente?: IntWithAggregatesFilter<"Materias"> | number
    idCurso?: IntWithAggregatesFilter<"Materias"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Materias"> | Date | string
    fechaFin?: DateTimeWithAggregatesFilter<"Materias"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Materias"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Materias"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Materias"> | Date | string | null
  }

  export type DiasHorariosClasesWhereInput = {
    AND?: DiasHorariosClasesWhereInput | DiasHorariosClasesWhereInput[]
    OR?: DiasHorariosClasesWhereInput[]
    NOT?: DiasHorariosClasesWhereInput | DiasHorariosClasesWhereInput[]
    id?: IntFilter<"DiasHorariosClases"> | number
    idMateria?: IntFilter<"DiasHorariosClases"> | number
    dias?: EnumDiasNullableListFilter<"DiasHorariosClases">
    horaInicio?: StringFilter<"DiasHorariosClases"> | string
    duracionMinutos?: IntFilter<"DiasHorariosClases"> | number
    createdAt?: DateTimeFilter<"DiasHorariosClases"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DiasHorariosClases"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"DiasHorariosClases"> | Date | string | null
    materia?: XOR<MateriasScalarRelationFilter, MateriasWhereInput>
  }

  export type DiasHorariosClasesOrderByWithRelationInput = {
    id?: SortOrder
    idMateria?: SortOrder
    dias?: SortOrder
    horaInicio?: SortOrder
    duracionMinutos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    materia?: MateriasOrderByWithRelationInput
  }

  export type DiasHorariosClasesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiasHorariosClasesWhereInput | DiasHorariosClasesWhereInput[]
    OR?: DiasHorariosClasesWhereInput[]
    NOT?: DiasHorariosClasesWhereInput | DiasHorariosClasesWhereInput[]
    idMateria?: IntFilter<"DiasHorariosClases"> | number
    dias?: EnumDiasNullableListFilter<"DiasHorariosClases">
    horaInicio?: StringFilter<"DiasHorariosClases"> | string
    duracionMinutos?: IntFilter<"DiasHorariosClases"> | number
    createdAt?: DateTimeFilter<"DiasHorariosClases"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DiasHorariosClases"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"DiasHorariosClases"> | Date | string | null
    materia?: XOR<MateriasScalarRelationFilter, MateriasWhereInput>
  }, "id">

  export type DiasHorariosClasesOrderByWithAggregationInput = {
    id?: SortOrder
    idMateria?: SortOrder
    dias?: SortOrder
    horaInicio?: SortOrder
    duracionMinutos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: DiasHorariosClasesCountOrderByAggregateInput
    _avg?: DiasHorariosClasesAvgOrderByAggregateInput
    _max?: DiasHorariosClasesMaxOrderByAggregateInput
    _min?: DiasHorariosClasesMinOrderByAggregateInput
    _sum?: DiasHorariosClasesSumOrderByAggregateInput
  }

  export type DiasHorariosClasesScalarWhereWithAggregatesInput = {
    AND?: DiasHorariosClasesScalarWhereWithAggregatesInput | DiasHorariosClasesScalarWhereWithAggregatesInput[]
    OR?: DiasHorariosClasesScalarWhereWithAggregatesInput[]
    NOT?: DiasHorariosClasesScalarWhereWithAggregatesInput | DiasHorariosClasesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DiasHorariosClases"> | number
    idMateria?: IntWithAggregatesFilter<"DiasHorariosClases"> | number
    dias?: EnumDiasNullableListFilter<"DiasHorariosClases">
    horaInicio?: StringWithAggregatesFilter<"DiasHorariosClases"> | string
    duracionMinutos?: IntWithAggregatesFilter<"DiasHorariosClases"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DiasHorariosClases"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"DiasHorariosClases"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"DiasHorariosClases"> | Date | string | null
  }

  export type CursosWhereInput = {
    AND?: CursosWhereInput | CursosWhereInput[]
    OR?: CursosWhereInput[]
    NOT?: CursosWhereInput | CursosWhereInput[]
    id?: IntFilter<"Cursos"> | number
    nombre?: StringFilter<"Cursos"> | string
    turno?: StringNullableFilter<"Cursos"> | string | null
    createdAt?: DateTimeFilter<"Cursos"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Cursos"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Cursos"> | Date | string | null
    Materias?: MateriasListRelationFilter
    Alumnos?: AlumnosListRelationFilter
  }

  export type CursosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    turno?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Materias?: MateriasOrderByRelationAggregateInput
    Alumnos?: AlumnosOrderByRelationAggregateInput
  }

  export type CursosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CursosWhereInput | CursosWhereInput[]
    OR?: CursosWhereInput[]
    NOT?: CursosWhereInput | CursosWhereInput[]
    nombre?: StringFilter<"Cursos"> | string
    turno?: StringNullableFilter<"Cursos"> | string | null
    createdAt?: DateTimeFilter<"Cursos"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Cursos"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Cursos"> | Date | string | null
    Materias?: MateriasListRelationFilter
    Alumnos?: AlumnosListRelationFilter
  }, "id">

  export type CursosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    turno?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CursosCountOrderByAggregateInput
    _avg?: CursosAvgOrderByAggregateInput
    _max?: CursosMaxOrderByAggregateInput
    _min?: CursosMinOrderByAggregateInput
    _sum?: CursosSumOrderByAggregateInput
  }

  export type CursosScalarWhereWithAggregatesInput = {
    AND?: CursosScalarWhereWithAggregatesInput | CursosScalarWhereWithAggregatesInput[]
    OR?: CursosScalarWhereWithAggregatesInput[]
    NOT?: CursosScalarWhereWithAggregatesInput | CursosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cursos"> | number
    nombre?: StringWithAggregatesFilter<"Cursos"> | string
    turno?: StringNullableWithAggregatesFilter<"Cursos"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cursos"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Cursos"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Cursos"> | Date | string | null
  }

  export type FechaNoLectivasWhereInput = {
    AND?: FechaNoLectivasWhereInput | FechaNoLectivasWhereInput[]
    OR?: FechaNoLectivasWhereInput[]
    NOT?: FechaNoLectivasWhereInput | FechaNoLectivasWhereInput[]
    id?: IntFilter<"FechaNoLectivas"> | number
    fechaInicio?: DateTimeFilter<"FechaNoLectivas"> | Date | string
    fechaFin?: DateTimeFilter<"FechaNoLectivas"> | Date | string
    motivo?: StringFilter<"FechaNoLectivas"> | string
  }

  export type FechaNoLectivasOrderByWithRelationInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    motivo?: SortOrder
  }

  export type FechaNoLectivasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fechaInicio?: Date | string
    AND?: FechaNoLectivasWhereInput | FechaNoLectivasWhereInput[]
    OR?: FechaNoLectivasWhereInput[]
    NOT?: FechaNoLectivasWhereInput | FechaNoLectivasWhereInput[]
    fechaFin?: DateTimeFilter<"FechaNoLectivas"> | Date | string
    motivo?: StringFilter<"FechaNoLectivas"> | string
  }, "id" | "fechaInicio">

  export type FechaNoLectivasOrderByWithAggregationInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    motivo?: SortOrder
    _count?: FechaNoLectivasCountOrderByAggregateInput
    _avg?: FechaNoLectivasAvgOrderByAggregateInput
    _max?: FechaNoLectivasMaxOrderByAggregateInput
    _min?: FechaNoLectivasMinOrderByAggregateInput
    _sum?: FechaNoLectivasSumOrderByAggregateInput
  }

  export type FechaNoLectivasScalarWhereWithAggregatesInput = {
    AND?: FechaNoLectivasScalarWhereWithAggregatesInput | FechaNoLectivasScalarWhereWithAggregatesInput[]
    OR?: FechaNoLectivasScalarWhereWithAggregatesInput[]
    NOT?: FechaNoLectivasScalarWhereWithAggregatesInput | FechaNoLectivasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FechaNoLectivas"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"FechaNoLectivas"> | Date | string
    fechaFin?: DateTimeWithAggregatesFilter<"FechaNoLectivas"> | Date | string
    motivo?: StringWithAggregatesFilter<"FechaNoLectivas"> | string
  }

  export type AlumnosCreateInput = {
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencias?: AsistenciasCreateNestedManyWithoutAlumnoInput
    Cursos?: CursosCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnosUncheckedCreateInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencias?: AsistenciasUncheckedCreateNestedManyWithoutAlumnoInput
    Cursos?: CursosUncheckedCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnosUpdateInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencias?: AsistenciasUpdateManyWithoutAlumnoNestedInput
    Cursos?: CursosUpdateManyWithoutAlumnosNestedInput
  }

  export type AlumnosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencias?: AsistenciasUncheckedUpdateManyWithoutAlumnoNestedInput
    Cursos?: CursosUncheckedUpdateManyWithoutAlumnosNestedInput
  }

  export type AlumnosCreateManyInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AlumnosUpdateManyMutationInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlumnosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClasesCreateInput = {
    fechaHora: Date | string
    suspendida?: boolean
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    materia: MateriasCreateNestedOneWithoutClasesInput
    Asistencias?: AsistenciasCreateNestedManyWithoutClaseInput
  }

  export type ClasesUncheckedCreateInput = {
    id?: number
    fechaHora: Date | string
    idMateria: number
    suspendida?: boolean
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencias?: AsistenciasUncheckedCreateNestedManyWithoutClaseInput
  }

  export type ClasesUpdateInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendida?: BoolFieldUpdateOperationsInput | boolean
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    materia?: MateriasUpdateOneRequiredWithoutClasesNestedInput
    Asistencias?: AsistenciasUpdateManyWithoutClaseNestedInput
  }

  export type ClasesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    idMateria?: IntFieldUpdateOperationsInput | number
    suspendida?: BoolFieldUpdateOperationsInput | boolean
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencias?: AsistenciasUncheckedUpdateManyWithoutClaseNestedInput
  }

  export type ClasesCreateManyInput = {
    id?: number
    fechaHora: Date | string
    idMateria: number
    suspendida?: boolean
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ClasesUpdateManyMutationInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendida?: BoolFieldUpdateOperationsInput | boolean
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClasesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    idMateria?: IntFieldUpdateOperationsInput | number
    suspendida?: BoolFieldUpdateOperationsInput | boolean
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsistenciasCreateInput = {
    estado?: $Enums.Estados
    nota?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    alumno: AlumnosCreateNestedOneWithoutAsistenciasInput
    clase: ClasesCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciasUncheckedCreateInput = {
    id?: number
    idAlumno: number
    idClase: number
    estado?: $Enums.Estados
    nota?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AsistenciasUpdateInput = {
    estado?: EnumEstadosFieldUpdateOperationsInput | $Enums.Estados
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alumno?: AlumnosUpdateOneRequiredWithoutAsistenciasNestedInput
    clase?: ClasesUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type AsistenciasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAlumno?: IntFieldUpdateOperationsInput | number
    idClase?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadosFieldUpdateOperationsInput | $Enums.Estados
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsistenciasCreateManyInput = {
    id?: number
    idAlumno: number
    idClase: number
    estado?: $Enums.Estados
    nota?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AsistenciasUpdateManyMutationInput = {
    estado?: EnumEstadosFieldUpdateOperationsInput | $Enums.Estados
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsistenciasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAlumno?: IntFieldUpdateOperationsInput | number
    idClase?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadosFieldUpdateOperationsInput | $Enums.Estados
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersDocentesCreateInput = {
    email: string
    password: string
    nombre: string
    apellido: string
    rol?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materias?: MateriasCreateNestedManyWithoutUserDocenteInput
  }

  export type UsersDocentesUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    nombre: string
    apellido: string
    rol?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materias?: MateriasUncheckedCreateNestedManyWithoutUserDocenteInput
  }

  export type UsersDocentesUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materias?: MateriasUpdateManyWithoutUserDocenteNestedInput
  }

  export type UsersDocentesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materias?: MateriasUncheckedUpdateManyWithoutUserDocenteNestedInput
  }

  export type UsersDocentesCreateManyInput = {
    id?: number
    email: string
    password: string
    nombre: string
    apellido: string
    rol?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UsersDocentesUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersDocentesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MateriasCreateInput = {
    nombre: string
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    userDocente: UsersDocentesCreateNestedOneWithoutMateriasInput
    curso: CursosCreateNestedOneWithoutMateriasInput
    Clases?: ClasesCreateNestedManyWithoutMateriaInput
    DiasHorariosClases?: DiasHorariosClasesCreateNestedManyWithoutMateriaInput
  }

  export type MateriasUncheckedCreateInput = {
    id?: number
    nombre: string
    idUserDocente: number
    idCurso: number
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Clases?: ClasesUncheckedCreateNestedManyWithoutMateriaInput
    DiasHorariosClases?: DiasHorariosClasesUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userDocente?: UsersDocentesUpdateOneRequiredWithoutMateriasNestedInput
    curso?: CursosUpdateOneRequiredWithoutMateriasNestedInput
    Clases?: ClasesUpdateManyWithoutMateriaNestedInput
    DiasHorariosClases?: DiasHorariosClasesUpdateManyWithoutMateriaNestedInput
  }

  export type MateriasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idUserDocente?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Clases?: ClasesUncheckedUpdateManyWithoutMateriaNestedInput
    DiasHorariosClases?: DiasHorariosClasesUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriasCreateManyInput = {
    id?: number
    nombre: string
    idUserDocente: number
    idCurso: number
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MateriasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MateriasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idUserDocente?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DiasHorariosClasesCreateInput = {
    dias?: DiasHorariosClasesCreatediasInput | $Enums.Dias[]
    horaInicio: string
    duracionMinutos: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    materia: MateriasCreateNestedOneWithoutDiasHorariosClasesInput
  }

  export type DiasHorariosClasesUncheckedCreateInput = {
    id?: number
    idMateria: number
    dias?: DiasHorariosClasesCreatediasInput | $Enums.Dias[]
    horaInicio: string
    duracionMinutos: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type DiasHorariosClasesUpdateInput = {
    dias?: DiasHorariosClasesUpdatediasInput | $Enums.Dias[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    materia?: MateriasUpdateOneRequiredWithoutDiasHorariosClasesNestedInput
  }

  export type DiasHorariosClasesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMateria?: IntFieldUpdateOperationsInput | number
    dias?: DiasHorariosClasesUpdatediasInput | $Enums.Dias[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DiasHorariosClasesCreateManyInput = {
    id?: number
    idMateria: number
    dias?: DiasHorariosClasesCreatediasInput | $Enums.Dias[]
    horaInicio: string
    duracionMinutos: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type DiasHorariosClasesUpdateManyMutationInput = {
    dias?: DiasHorariosClasesUpdatediasInput | $Enums.Dias[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DiasHorariosClasesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMateria?: IntFieldUpdateOperationsInput | number
    dias?: DiasHorariosClasesUpdatediasInput | $Enums.Dias[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CursosCreateInput = {
    nombre: string
    turno?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materias?: MateriasCreateNestedManyWithoutCursoInput
    Alumnos?: AlumnosCreateNestedManyWithoutCursosInput
  }

  export type CursosUncheckedCreateInput = {
    id?: number
    nombre: string
    turno?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materias?: MateriasUncheckedCreateNestedManyWithoutCursoInput
    Alumnos?: AlumnosUncheckedCreateNestedManyWithoutCursosInput
  }

  export type CursosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materias?: MateriasUpdateManyWithoutCursoNestedInput
    Alumnos?: AlumnosUpdateManyWithoutCursosNestedInput
  }

  export type CursosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materias?: MateriasUncheckedUpdateManyWithoutCursoNestedInput
    Alumnos?: AlumnosUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type CursosCreateManyInput = {
    id?: number
    nombre: string
    turno?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CursosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CursosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FechaNoLectivasCreateInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
  }

  export type FechaNoLectivasUncheckedCreateInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
  }

  export type FechaNoLectivasUpdateInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
  }

  export type FechaNoLectivasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
  }

  export type FechaNoLectivasCreateManyInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
  }

  export type FechaNoLectivasUpdateManyMutationInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
  }

  export type FechaNoLectivasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
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

  export type AsistenciasListRelationFilter = {
    every?: AsistenciasWhereInput
    some?: AsistenciasWhereInput
    none?: AsistenciasWhereInput
  }

  export type CursosListRelationFilter = {
    every?: CursosWhereInput
    some?: CursosWhereInput
    none?: CursosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AsistenciasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CursosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlumnosCountOrderByAggregateInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AlumnosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlumnosMaxOrderByAggregateInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AlumnosMinOrderByAggregateInput = {
    id?: SortOrder
    legajo?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AlumnosSumOrderByAggregateInput = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MateriasScalarRelationFilter = {
    is?: MateriasWhereInput
    isNot?: MateriasWhereInput
  }

  export type ClasesCountOrderByAggregateInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    idMateria?: SortOrder
    suspendida?: SortOrder
    motivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClasesAvgOrderByAggregateInput = {
    id?: SortOrder
    idMateria?: SortOrder
  }

  export type ClasesMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    idMateria?: SortOrder
    suspendida?: SortOrder
    motivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClasesMinOrderByAggregateInput = {
    id?: SortOrder
    fechaHora?: SortOrder
    idMateria?: SortOrder
    suspendida?: SortOrder
    motivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClasesSumOrderByAggregateInput = {
    id?: SortOrder
    idMateria?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEstadosFilter<$PrismaModel = never> = {
    equals?: $Enums.Estados | EnumEstadosFieldRefInput<$PrismaModel>
    in?: $Enums.Estados[] | ListEnumEstadosFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estados[] | ListEnumEstadosFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadosFilter<$PrismaModel> | $Enums.Estados
  }

  export type AlumnosScalarRelationFilter = {
    is?: AlumnosWhereInput
    isNot?: AlumnosWhereInput
  }

  export type ClasesScalarRelationFilter = {
    is?: ClasesWhereInput
    isNot?: ClasesWhereInput
  }

  export type AsistenciasCountOrderByAggregateInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
    estado?: SortOrder
    nota?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AsistenciasAvgOrderByAggregateInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
  }

  export type AsistenciasMaxOrderByAggregateInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
    estado?: SortOrder
    nota?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AsistenciasMinOrderByAggregateInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
    estado?: SortOrder
    nota?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AsistenciasSumOrderByAggregateInput = {
    id?: SortOrder
    idAlumno?: SortOrder
    idClase?: SortOrder
  }

  export type EnumEstadosWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estados | EnumEstadosFieldRefInput<$PrismaModel>
    in?: $Enums.Estados[] | ListEnumEstadosFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estados[] | ListEnumEstadosFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadosWithAggregatesFilter<$PrismaModel> | $Enums.Estados
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadosFilter<$PrismaModel>
    _max?: NestedEnumEstadosFilter<$PrismaModel>
  }

  export type MateriasListRelationFilter = {
    every?: MateriasWhereInput
    some?: MateriasWhereInput
    none?: MateriasWhereInput
  }

  export type MateriasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersDocentesCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsersDocentesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersDocentesMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsersDocentesMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsersDocentesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersDocentesScalarRelationFilter = {
    is?: UsersDocentesWhereInput
    isNot?: UsersDocentesWhereInput
  }

  export type CursosScalarRelationFilter = {
    is?: CursosWhereInput
    isNot?: CursosWhereInput
  }

  export type ClasesListRelationFilter = {
    every?: ClasesWhereInput
    some?: ClasesWhereInput
    none?: ClasesWhereInput
  }

  export type DiasHorariosClasesListRelationFilter = {
    every?: DiasHorariosClasesWhereInput
    some?: DiasHorariosClasesWhereInput
    none?: DiasHorariosClasesWhereInput
  }

  export type ClasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiasHorariosClasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MateriasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MateriasAvgOrderByAggregateInput = {
    id?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
  }

  export type MateriasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MateriasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MateriasSumOrderByAggregateInput = {
    id?: SortOrder
    idUserDocente?: SortOrder
    idCurso?: SortOrder
  }

  export type EnumDiasNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Dias[] | ListEnumDiasFieldRefInput<$PrismaModel> | null
    has?: $Enums.Dias | EnumDiasFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Dias[] | ListEnumDiasFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Dias[] | ListEnumDiasFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DiasHorariosClasesCountOrderByAggregateInput = {
    id?: SortOrder
    idMateria?: SortOrder
    dias?: SortOrder
    horaInicio?: SortOrder
    duracionMinutos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DiasHorariosClasesAvgOrderByAggregateInput = {
    id?: SortOrder
    idMateria?: SortOrder
    duracionMinutos?: SortOrder
  }

  export type DiasHorariosClasesMaxOrderByAggregateInput = {
    id?: SortOrder
    idMateria?: SortOrder
    horaInicio?: SortOrder
    duracionMinutos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DiasHorariosClasesMinOrderByAggregateInput = {
    id?: SortOrder
    idMateria?: SortOrder
    horaInicio?: SortOrder
    duracionMinutos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DiasHorariosClasesSumOrderByAggregateInput = {
    id?: SortOrder
    idMateria?: SortOrder
    duracionMinutos?: SortOrder
  }

  export type AlumnosListRelationFilter = {
    every?: AlumnosWhereInput
    some?: AlumnosWhereInput
    none?: AlumnosWhereInput
  }

  export type AlumnosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CursosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    turno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CursosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CursosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    turno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CursosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    turno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CursosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FechaNoLectivasCountOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    motivo?: SortOrder
  }

  export type FechaNoLectivasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FechaNoLectivasMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    motivo?: SortOrder
  }

  export type FechaNoLectivasMinOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    motivo?: SortOrder
  }

  export type FechaNoLectivasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AsistenciasCreateNestedManyWithoutAlumnoInput = {
    create?: XOR<AsistenciasCreateWithoutAlumnoInput, AsistenciasUncheckedCreateWithoutAlumnoInput> | AsistenciasCreateWithoutAlumnoInput[] | AsistenciasUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AsistenciasCreateOrConnectWithoutAlumnoInput | AsistenciasCreateOrConnectWithoutAlumnoInput[]
    createMany?: AsistenciasCreateManyAlumnoInputEnvelope
    connect?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
  }

  export type CursosCreateNestedManyWithoutAlumnosInput = {
    create?: XOR<CursosCreateWithoutAlumnosInput, CursosUncheckedCreateWithoutAlumnosInput> | CursosCreateWithoutAlumnosInput[] | CursosUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: CursosCreateOrConnectWithoutAlumnosInput | CursosCreateOrConnectWithoutAlumnosInput[]
    connect?: CursosWhereUniqueInput | CursosWhereUniqueInput[]
  }

  export type AsistenciasUncheckedCreateNestedManyWithoutAlumnoInput = {
    create?: XOR<AsistenciasCreateWithoutAlumnoInput, AsistenciasUncheckedCreateWithoutAlumnoInput> | AsistenciasCreateWithoutAlumnoInput[] | AsistenciasUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AsistenciasCreateOrConnectWithoutAlumnoInput | AsistenciasCreateOrConnectWithoutAlumnoInput[]
    createMany?: AsistenciasCreateManyAlumnoInputEnvelope
    connect?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
  }

  export type CursosUncheckedCreateNestedManyWithoutAlumnosInput = {
    create?: XOR<CursosCreateWithoutAlumnosInput, CursosUncheckedCreateWithoutAlumnosInput> | CursosCreateWithoutAlumnosInput[] | CursosUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: CursosCreateOrConnectWithoutAlumnosInput | CursosCreateOrConnectWithoutAlumnosInput[]
    connect?: CursosWhereUniqueInput | CursosWhereUniqueInput[]
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

  export type AsistenciasUpdateManyWithoutAlumnoNestedInput = {
    create?: XOR<AsistenciasCreateWithoutAlumnoInput, AsistenciasUncheckedCreateWithoutAlumnoInput> | AsistenciasCreateWithoutAlumnoInput[] | AsistenciasUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AsistenciasCreateOrConnectWithoutAlumnoInput | AsistenciasCreateOrConnectWithoutAlumnoInput[]
    upsert?: AsistenciasUpsertWithWhereUniqueWithoutAlumnoInput | AsistenciasUpsertWithWhereUniqueWithoutAlumnoInput[]
    createMany?: AsistenciasCreateManyAlumnoInputEnvelope
    set?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    disconnect?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    delete?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    connect?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    update?: AsistenciasUpdateWithWhereUniqueWithoutAlumnoInput | AsistenciasUpdateWithWhereUniqueWithoutAlumnoInput[]
    updateMany?: AsistenciasUpdateManyWithWhereWithoutAlumnoInput | AsistenciasUpdateManyWithWhereWithoutAlumnoInput[]
    deleteMany?: AsistenciasScalarWhereInput | AsistenciasScalarWhereInput[]
  }

  export type CursosUpdateManyWithoutAlumnosNestedInput = {
    create?: XOR<CursosCreateWithoutAlumnosInput, CursosUncheckedCreateWithoutAlumnosInput> | CursosCreateWithoutAlumnosInput[] | CursosUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: CursosCreateOrConnectWithoutAlumnosInput | CursosCreateOrConnectWithoutAlumnosInput[]
    upsert?: CursosUpsertWithWhereUniqueWithoutAlumnosInput | CursosUpsertWithWhereUniqueWithoutAlumnosInput[]
    set?: CursosWhereUniqueInput | CursosWhereUniqueInput[]
    disconnect?: CursosWhereUniqueInput | CursosWhereUniqueInput[]
    delete?: CursosWhereUniqueInput | CursosWhereUniqueInput[]
    connect?: CursosWhereUniqueInput | CursosWhereUniqueInput[]
    update?: CursosUpdateWithWhereUniqueWithoutAlumnosInput | CursosUpdateWithWhereUniqueWithoutAlumnosInput[]
    updateMany?: CursosUpdateManyWithWhereWithoutAlumnosInput | CursosUpdateManyWithWhereWithoutAlumnosInput[]
    deleteMany?: CursosScalarWhereInput | CursosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AsistenciasUncheckedUpdateManyWithoutAlumnoNestedInput = {
    create?: XOR<AsistenciasCreateWithoutAlumnoInput, AsistenciasUncheckedCreateWithoutAlumnoInput> | AsistenciasCreateWithoutAlumnoInput[] | AsistenciasUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AsistenciasCreateOrConnectWithoutAlumnoInput | AsistenciasCreateOrConnectWithoutAlumnoInput[]
    upsert?: AsistenciasUpsertWithWhereUniqueWithoutAlumnoInput | AsistenciasUpsertWithWhereUniqueWithoutAlumnoInput[]
    createMany?: AsistenciasCreateManyAlumnoInputEnvelope
    set?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    disconnect?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    delete?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    connect?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    update?: AsistenciasUpdateWithWhereUniqueWithoutAlumnoInput | AsistenciasUpdateWithWhereUniqueWithoutAlumnoInput[]
    updateMany?: AsistenciasUpdateManyWithWhereWithoutAlumnoInput | AsistenciasUpdateManyWithWhereWithoutAlumnoInput[]
    deleteMany?: AsistenciasScalarWhereInput | AsistenciasScalarWhereInput[]
  }

  export type CursosUncheckedUpdateManyWithoutAlumnosNestedInput = {
    create?: XOR<CursosCreateWithoutAlumnosInput, CursosUncheckedCreateWithoutAlumnosInput> | CursosCreateWithoutAlumnosInput[] | CursosUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: CursosCreateOrConnectWithoutAlumnosInput | CursosCreateOrConnectWithoutAlumnosInput[]
    upsert?: CursosUpsertWithWhereUniqueWithoutAlumnosInput | CursosUpsertWithWhereUniqueWithoutAlumnosInput[]
    set?: CursosWhereUniqueInput | CursosWhereUniqueInput[]
    disconnect?: CursosWhereUniqueInput | CursosWhereUniqueInput[]
    delete?: CursosWhereUniqueInput | CursosWhereUniqueInput[]
    connect?: CursosWhereUniqueInput | CursosWhereUniqueInput[]
    update?: CursosUpdateWithWhereUniqueWithoutAlumnosInput | CursosUpdateWithWhereUniqueWithoutAlumnosInput[]
    updateMany?: CursosUpdateManyWithWhereWithoutAlumnosInput | CursosUpdateManyWithWhereWithoutAlumnosInput[]
    deleteMany?: CursosScalarWhereInput | CursosScalarWhereInput[]
  }

  export type MateriasCreateNestedOneWithoutClasesInput = {
    create?: XOR<MateriasCreateWithoutClasesInput, MateriasUncheckedCreateWithoutClasesInput>
    connectOrCreate?: MateriasCreateOrConnectWithoutClasesInput
    connect?: MateriasWhereUniqueInput
  }

  export type AsistenciasCreateNestedManyWithoutClaseInput = {
    create?: XOR<AsistenciasCreateWithoutClaseInput, AsistenciasUncheckedCreateWithoutClaseInput> | AsistenciasCreateWithoutClaseInput[] | AsistenciasUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AsistenciasCreateOrConnectWithoutClaseInput | AsistenciasCreateOrConnectWithoutClaseInput[]
    createMany?: AsistenciasCreateManyClaseInputEnvelope
    connect?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
  }

  export type AsistenciasUncheckedCreateNestedManyWithoutClaseInput = {
    create?: XOR<AsistenciasCreateWithoutClaseInput, AsistenciasUncheckedCreateWithoutClaseInput> | AsistenciasCreateWithoutClaseInput[] | AsistenciasUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AsistenciasCreateOrConnectWithoutClaseInput | AsistenciasCreateOrConnectWithoutClaseInput[]
    createMany?: AsistenciasCreateManyClaseInputEnvelope
    connect?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MateriasUpdateOneRequiredWithoutClasesNestedInput = {
    create?: XOR<MateriasCreateWithoutClasesInput, MateriasUncheckedCreateWithoutClasesInput>
    connectOrCreate?: MateriasCreateOrConnectWithoutClasesInput
    upsert?: MateriasUpsertWithoutClasesInput
    connect?: MateriasWhereUniqueInput
    update?: XOR<XOR<MateriasUpdateToOneWithWhereWithoutClasesInput, MateriasUpdateWithoutClasesInput>, MateriasUncheckedUpdateWithoutClasesInput>
  }

  export type AsistenciasUpdateManyWithoutClaseNestedInput = {
    create?: XOR<AsistenciasCreateWithoutClaseInput, AsistenciasUncheckedCreateWithoutClaseInput> | AsistenciasCreateWithoutClaseInput[] | AsistenciasUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AsistenciasCreateOrConnectWithoutClaseInput | AsistenciasCreateOrConnectWithoutClaseInput[]
    upsert?: AsistenciasUpsertWithWhereUniqueWithoutClaseInput | AsistenciasUpsertWithWhereUniqueWithoutClaseInput[]
    createMany?: AsistenciasCreateManyClaseInputEnvelope
    set?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    disconnect?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    delete?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    connect?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    update?: AsistenciasUpdateWithWhereUniqueWithoutClaseInput | AsistenciasUpdateWithWhereUniqueWithoutClaseInput[]
    updateMany?: AsistenciasUpdateManyWithWhereWithoutClaseInput | AsistenciasUpdateManyWithWhereWithoutClaseInput[]
    deleteMany?: AsistenciasScalarWhereInput | AsistenciasScalarWhereInput[]
  }

  export type AsistenciasUncheckedUpdateManyWithoutClaseNestedInput = {
    create?: XOR<AsistenciasCreateWithoutClaseInput, AsistenciasUncheckedCreateWithoutClaseInput> | AsistenciasCreateWithoutClaseInput[] | AsistenciasUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AsistenciasCreateOrConnectWithoutClaseInput | AsistenciasCreateOrConnectWithoutClaseInput[]
    upsert?: AsistenciasUpsertWithWhereUniqueWithoutClaseInput | AsistenciasUpsertWithWhereUniqueWithoutClaseInput[]
    createMany?: AsistenciasCreateManyClaseInputEnvelope
    set?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    disconnect?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    delete?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    connect?: AsistenciasWhereUniqueInput | AsistenciasWhereUniqueInput[]
    update?: AsistenciasUpdateWithWhereUniqueWithoutClaseInput | AsistenciasUpdateWithWhereUniqueWithoutClaseInput[]
    updateMany?: AsistenciasUpdateManyWithWhereWithoutClaseInput | AsistenciasUpdateManyWithWhereWithoutClaseInput[]
    deleteMany?: AsistenciasScalarWhereInput | AsistenciasScalarWhereInput[]
  }

  export type AlumnosCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<AlumnosCreateWithoutAsistenciasInput, AlumnosUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: AlumnosCreateOrConnectWithoutAsistenciasInput
    connect?: AlumnosWhereUniqueInput
  }

  export type ClasesCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<ClasesCreateWithoutAsistenciasInput, ClasesUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: ClasesCreateOrConnectWithoutAsistenciasInput
    connect?: ClasesWhereUniqueInput
  }

  export type EnumEstadosFieldUpdateOperationsInput = {
    set?: $Enums.Estados
  }

  export type AlumnosUpdateOneRequiredWithoutAsistenciasNestedInput = {
    create?: XOR<AlumnosCreateWithoutAsistenciasInput, AlumnosUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: AlumnosCreateOrConnectWithoutAsistenciasInput
    upsert?: AlumnosUpsertWithoutAsistenciasInput
    connect?: AlumnosWhereUniqueInput
    update?: XOR<XOR<AlumnosUpdateToOneWithWhereWithoutAsistenciasInput, AlumnosUpdateWithoutAsistenciasInput>, AlumnosUncheckedUpdateWithoutAsistenciasInput>
  }

  export type ClasesUpdateOneRequiredWithoutAsistenciasNestedInput = {
    create?: XOR<ClasesCreateWithoutAsistenciasInput, ClasesUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: ClasesCreateOrConnectWithoutAsistenciasInput
    upsert?: ClasesUpsertWithoutAsistenciasInput
    connect?: ClasesWhereUniqueInput
    update?: XOR<XOR<ClasesUpdateToOneWithWhereWithoutAsistenciasInput, ClasesUpdateWithoutAsistenciasInput>, ClasesUncheckedUpdateWithoutAsistenciasInput>
  }

  export type MateriasCreateNestedManyWithoutUserDocenteInput = {
    create?: XOR<MateriasCreateWithoutUserDocenteInput, MateriasUncheckedCreateWithoutUserDocenteInput> | MateriasCreateWithoutUserDocenteInput[] | MateriasUncheckedCreateWithoutUserDocenteInput[]
    connectOrCreate?: MateriasCreateOrConnectWithoutUserDocenteInput | MateriasCreateOrConnectWithoutUserDocenteInput[]
    createMany?: MateriasCreateManyUserDocenteInputEnvelope
    connect?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
  }

  export type MateriasUncheckedCreateNestedManyWithoutUserDocenteInput = {
    create?: XOR<MateriasCreateWithoutUserDocenteInput, MateriasUncheckedCreateWithoutUserDocenteInput> | MateriasCreateWithoutUserDocenteInput[] | MateriasUncheckedCreateWithoutUserDocenteInput[]
    connectOrCreate?: MateriasCreateOrConnectWithoutUserDocenteInput | MateriasCreateOrConnectWithoutUserDocenteInput[]
    createMany?: MateriasCreateManyUserDocenteInputEnvelope
    connect?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
  }

  export type MateriasUpdateManyWithoutUserDocenteNestedInput = {
    create?: XOR<MateriasCreateWithoutUserDocenteInput, MateriasUncheckedCreateWithoutUserDocenteInput> | MateriasCreateWithoutUserDocenteInput[] | MateriasUncheckedCreateWithoutUserDocenteInput[]
    connectOrCreate?: MateriasCreateOrConnectWithoutUserDocenteInput | MateriasCreateOrConnectWithoutUserDocenteInput[]
    upsert?: MateriasUpsertWithWhereUniqueWithoutUserDocenteInput | MateriasUpsertWithWhereUniqueWithoutUserDocenteInput[]
    createMany?: MateriasCreateManyUserDocenteInputEnvelope
    set?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    disconnect?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    delete?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    connect?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    update?: MateriasUpdateWithWhereUniqueWithoutUserDocenteInput | MateriasUpdateWithWhereUniqueWithoutUserDocenteInput[]
    updateMany?: MateriasUpdateManyWithWhereWithoutUserDocenteInput | MateriasUpdateManyWithWhereWithoutUserDocenteInput[]
    deleteMany?: MateriasScalarWhereInput | MateriasScalarWhereInput[]
  }

  export type MateriasUncheckedUpdateManyWithoutUserDocenteNestedInput = {
    create?: XOR<MateriasCreateWithoutUserDocenteInput, MateriasUncheckedCreateWithoutUserDocenteInput> | MateriasCreateWithoutUserDocenteInput[] | MateriasUncheckedCreateWithoutUserDocenteInput[]
    connectOrCreate?: MateriasCreateOrConnectWithoutUserDocenteInput | MateriasCreateOrConnectWithoutUserDocenteInput[]
    upsert?: MateriasUpsertWithWhereUniqueWithoutUserDocenteInput | MateriasUpsertWithWhereUniqueWithoutUserDocenteInput[]
    createMany?: MateriasCreateManyUserDocenteInputEnvelope
    set?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    disconnect?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    delete?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    connect?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    update?: MateriasUpdateWithWhereUniqueWithoutUserDocenteInput | MateriasUpdateWithWhereUniqueWithoutUserDocenteInput[]
    updateMany?: MateriasUpdateManyWithWhereWithoutUserDocenteInput | MateriasUpdateManyWithWhereWithoutUserDocenteInput[]
    deleteMany?: MateriasScalarWhereInput | MateriasScalarWhereInput[]
  }

  export type UsersDocentesCreateNestedOneWithoutMateriasInput = {
    create?: XOR<UsersDocentesCreateWithoutMateriasInput, UsersDocentesUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: UsersDocentesCreateOrConnectWithoutMateriasInput
    connect?: UsersDocentesWhereUniqueInput
  }

  export type CursosCreateNestedOneWithoutMateriasInput = {
    create?: XOR<CursosCreateWithoutMateriasInput, CursosUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CursosCreateOrConnectWithoutMateriasInput
    connect?: CursosWhereUniqueInput
  }

  export type ClasesCreateNestedManyWithoutMateriaInput = {
    create?: XOR<ClasesCreateWithoutMateriaInput, ClasesUncheckedCreateWithoutMateriaInput> | ClasesCreateWithoutMateriaInput[] | ClasesUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutMateriaInput | ClasesCreateOrConnectWithoutMateriaInput[]
    createMany?: ClasesCreateManyMateriaInputEnvelope
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
  }

  export type DiasHorariosClasesCreateNestedManyWithoutMateriaInput = {
    create?: XOR<DiasHorariosClasesCreateWithoutMateriaInput, DiasHorariosClasesUncheckedCreateWithoutMateriaInput> | DiasHorariosClasesCreateWithoutMateriaInput[] | DiasHorariosClasesUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DiasHorariosClasesCreateOrConnectWithoutMateriaInput | DiasHorariosClasesCreateOrConnectWithoutMateriaInput[]
    createMany?: DiasHorariosClasesCreateManyMateriaInputEnvelope
    connect?: DiasHorariosClasesWhereUniqueInput | DiasHorariosClasesWhereUniqueInput[]
  }

  export type ClasesUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<ClasesCreateWithoutMateriaInput, ClasesUncheckedCreateWithoutMateriaInput> | ClasesCreateWithoutMateriaInput[] | ClasesUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutMateriaInput | ClasesCreateOrConnectWithoutMateriaInput[]
    createMany?: ClasesCreateManyMateriaInputEnvelope
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
  }

  export type DiasHorariosClasesUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<DiasHorariosClasesCreateWithoutMateriaInput, DiasHorariosClasesUncheckedCreateWithoutMateriaInput> | DiasHorariosClasesCreateWithoutMateriaInput[] | DiasHorariosClasesUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DiasHorariosClasesCreateOrConnectWithoutMateriaInput | DiasHorariosClasesCreateOrConnectWithoutMateriaInput[]
    createMany?: DiasHorariosClasesCreateManyMateriaInputEnvelope
    connect?: DiasHorariosClasesWhereUniqueInput | DiasHorariosClasesWhereUniqueInput[]
  }

  export type UsersDocentesUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<UsersDocentesCreateWithoutMateriasInput, UsersDocentesUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: UsersDocentesCreateOrConnectWithoutMateriasInput
    upsert?: UsersDocentesUpsertWithoutMateriasInput
    connect?: UsersDocentesWhereUniqueInput
    update?: XOR<XOR<UsersDocentesUpdateToOneWithWhereWithoutMateriasInput, UsersDocentesUpdateWithoutMateriasInput>, UsersDocentesUncheckedUpdateWithoutMateriasInput>
  }

  export type CursosUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<CursosCreateWithoutMateriasInput, CursosUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CursosCreateOrConnectWithoutMateriasInput
    upsert?: CursosUpsertWithoutMateriasInput
    connect?: CursosWhereUniqueInput
    update?: XOR<XOR<CursosUpdateToOneWithWhereWithoutMateriasInput, CursosUpdateWithoutMateriasInput>, CursosUncheckedUpdateWithoutMateriasInput>
  }

  export type ClasesUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<ClasesCreateWithoutMateriaInput, ClasesUncheckedCreateWithoutMateriaInput> | ClasesCreateWithoutMateriaInput[] | ClasesUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutMateriaInput | ClasesCreateOrConnectWithoutMateriaInput[]
    upsert?: ClasesUpsertWithWhereUniqueWithoutMateriaInput | ClasesUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: ClasesCreateManyMateriaInputEnvelope
    set?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    disconnect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    delete?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    update?: ClasesUpdateWithWhereUniqueWithoutMateriaInput | ClasesUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: ClasesUpdateManyWithWhereWithoutMateriaInput | ClasesUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: ClasesScalarWhereInput | ClasesScalarWhereInput[]
  }

  export type DiasHorariosClasesUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<DiasHorariosClasesCreateWithoutMateriaInput, DiasHorariosClasesUncheckedCreateWithoutMateriaInput> | DiasHorariosClasesCreateWithoutMateriaInput[] | DiasHorariosClasesUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DiasHorariosClasesCreateOrConnectWithoutMateriaInput | DiasHorariosClasesCreateOrConnectWithoutMateriaInput[]
    upsert?: DiasHorariosClasesUpsertWithWhereUniqueWithoutMateriaInput | DiasHorariosClasesUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: DiasHorariosClasesCreateManyMateriaInputEnvelope
    set?: DiasHorariosClasesWhereUniqueInput | DiasHorariosClasesWhereUniqueInput[]
    disconnect?: DiasHorariosClasesWhereUniqueInput | DiasHorariosClasesWhereUniqueInput[]
    delete?: DiasHorariosClasesWhereUniqueInput | DiasHorariosClasesWhereUniqueInput[]
    connect?: DiasHorariosClasesWhereUniqueInput | DiasHorariosClasesWhereUniqueInput[]
    update?: DiasHorariosClasesUpdateWithWhereUniqueWithoutMateriaInput | DiasHorariosClasesUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: DiasHorariosClasesUpdateManyWithWhereWithoutMateriaInput | DiasHorariosClasesUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: DiasHorariosClasesScalarWhereInput | DiasHorariosClasesScalarWhereInput[]
  }

  export type ClasesUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<ClasesCreateWithoutMateriaInput, ClasesUncheckedCreateWithoutMateriaInput> | ClasesCreateWithoutMateriaInput[] | ClasesUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutMateriaInput | ClasesCreateOrConnectWithoutMateriaInput[]
    upsert?: ClasesUpsertWithWhereUniqueWithoutMateriaInput | ClasesUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: ClasesCreateManyMateriaInputEnvelope
    set?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    disconnect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    delete?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    update?: ClasesUpdateWithWhereUniqueWithoutMateriaInput | ClasesUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: ClasesUpdateManyWithWhereWithoutMateriaInput | ClasesUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: ClasesScalarWhereInput | ClasesScalarWhereInput[]
  }

  export type DiasHorariosClasesUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<DiasHorariosClasesCreateWithoutMateriaInput, DiasHorariosClasesUncheckedCreateWithoutMateriaInput> | DiasHorariosClasesCreateWithoutMateriaInput[] | DiasHorariosClasesUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DiasHorariosClasesCreateOrConnectWithoutMateriaInput | DiasHorariosClasesCreateOrConnectWithoutMateriaInput[]
    upsert?: DiasHorariosClasesUpsertWithWhereUniqueWithoutMateriaInput | DiasHorariosClasesUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: DiasHorariosClasesCreateManyMateriaInputEnvelope
    set?: DiasHorariosClasesWhereUniqueInput | DiasHorariosClasesWhereUniqueInput[]
    disconnect?: DiasHorariosClasesWhereUniqueInput | DiasHorariosClasesWhereUniqueInput[]
    delete?: DiasHorariosClasesWhereUniqueInput | DiasHorariosClasesWhereUniqueInput[]
    connect?: DiasHorariosClasesWhereUniqueInput | DiasHorariosClasesWhereUniqueInput[]
    update?: DiasHorariosClasesUpdateWithWhereUniqueWithoutMateriaInput | DiasHorariosClasesUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: DiasHorariosClasesUpdateManyWithWhereWithoutMateriaInput | DiasHorariosClasesUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: DiasHorariosClasesScalarWhereInput | DiasHorariosClasesScalarWhereInput[]
  }

  export type DiasHorariosClasesCreatediasInput = {
    set: $Enums.Dias[]
  }

  export type MateriasCreateNestedOneWithoutDiasHorariosClasesInput = {
    create?: XOR<MateriasCreateWithoutDiasHorariosClasesInput, MateriasUncheckedCreateWithoutDiasHorariosClasesInput>
    connectOrCreate?: MateriasCreateOrConnectWithoutDiasHorariosClasesInput
    connect?: MateriasWhereUniqueInput
  }

  export type DiasHorariosClasesUpdatediasInput = {
    set?: $Enums.Dias[]
    push?: $Enums.Dias | $Enums.Dias[]
  }

  export type MateriasUpdateOneRequiredWithoutDiasHorariosClasesNestedInput = {
    create?: XOR<MateriasCreateWithoutDiasHorariosClasesInput, MateriasUncheckedCreateWithoutDiasHorariosClasesInput>
    connectOrCreate?: MateriasCreateOrConnectWithoutDiasHorariosClasesInput
    upsert?: MateriasUpsertWithoutDiasHorariosClasesInput
    connect?: MateriasWhereUniqueInput
    update?: XOR<XOR<MateriasUpdateToOneWithWhereWithoutDiasHorariosClasesInput, MateriasUpdateWithoutDiasHorariosClasesInput>, MateriasUncheckedUpdateWithoutDiasHorariosClasesInput>
  }

  export type MateriasCreateNestedManyWithoutCursoInput = {
    create?: XOR<MateriasCreateWithoutCursoInput, MateriasUncheckedCreateWithoutCursoInput> | MateriasCreateWithoutCursoInput[] | MateriasUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MateriasCreateOrConnectWithoutCursoInput | MateriasCreateOrConnectWithoutCursoInput[]
    createMany?: MateriasCreateManyCursoInputEnvelope
    connect?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
  }

  export type AlumnosCreateNestedManyWithoutCursosInput = {
    create?: XOR<AlumnosCreateWithoutCursosInput, AlumnosUncheckedCreateWithoutCursosInput> | AlumnosCreateWithoutCursosInput[] | AlumnosUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: AlumnosCreateOrConnectWithoutCursosInput | AlumnosCreateOrConnectWithoutCursosInput[]
    connect?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
  }

  export type MateriasUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<MateriasCreateWithoutCursoInput, MateriasUncheckedCreateWithoutCursoInput> | MateriasCreateWithoutCursoInput[] | MateriasUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MateriasCreateOrConnectWithoutCursoInput | MateriasCreateOrConnectWithoutCursoInput[]
    createMany?: MateriasCreateManyCursoInputEnvelope
    connect?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
  }

  export type AlumnosUncheckedCreateNestedManyWithoutCursosInput = {
    create?: XOR<AlumnosCreateWithoutCursosInput, AlumnosUncheckedCreateWithoutCursosInput> | AlumnosCreateWithoutCursosInput[] | AlumnosUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: AlumnosCreateOrConnectWithoutCursosInput | AlumnosCreateOrConnectWithoutCursosInput[]
    connect?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
  }

  export type MateriasUpdateManyWithoutCursoNestedInput = {
    create?: XOR<MateriasCreateWithoutCursoInput, MateriasUncheckedCreateWithoutCursoInput> | MateriasCreateWithoutCursoInput[] | MateriasUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MateriasCreateOrConnectWithoutCursoInput | MateriasCreateOrConnectWithoutCursoInput[]
    upsert?: MateriasUpsertWithWhereUniqueWithoutCursoInput | MateriasUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: MateriasCreateManyCursoInputEnvelope
    set?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    disconnect?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    delete?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    connect?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    update?: MateriasUpdateWithWhereUniqueWithoutCursoInput | MateriasUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: MateriasUpdateManyWithWhereWithoutCursoInput | MateriasUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: MateriasScalarWhereInput | MateriasScalarWhereInput[]
  }

  export type AlumnosUpdateManyWithoutCursosNestedInput = {
    create?: XOR<AlumnosCreateWithoutCursosInput, AlumnosUncheckedCreateWithoutCursosInput> | AlumnosCreateWithoutCursosInput[] | AlumnosUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: AlumnosCreateOrConnectWithoutCursosInput | AlumnosCreateOrConnectWithoutCursosInput[]
    upsert?: AlumnosUpsertWithWhereUniqueWithoutCursosInput | AlumnosUpsertWithWhereUniqueWithoutCursosInput[]
    set?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    disconnect?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    delete?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    connect?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    update?: AlumnosUpdateWithWhereUniqueWithoutCursosInput | AlumnosUpdateWithWhereUniqueWithoutCursosInput[]
    updateMany?: AlumnosUpdateManyWithWhereWithoutCursosInput | AlumnosUpdateManyWithWhereWithoutCursosInput[]
    deleteMany?: AlumnosScalarWhereInput | AlumnosScalarWhereInput[]
  }

  export type MateriasUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<MateriasCreateWithoutCursoInput, MateriasUncheckedCreateWithoutCursoInput> | MateriasCreateWithoutCursoInput[] | MateriasUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MateriasCreateOrConnectWithoutCursoInput | MateriasCreateOrConnectWithoutCursoInput[]
    upsert?: MateriasUpsertWithWhereUniqueWithoutCursoInput | MateriasUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: MateriasCreateManyCursoInputEnvelope
    set?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    disconnect?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    delete?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    connect?: MateriasWhereUniqueInput | MateriasWhereUniqueInput[]
    update?: MateriasUpdateWithWhereUniqueWithoutCursoInput | MateriasUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: MateriasUpdateManyWithWhereWithoutCursoInput | MateriasUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: MateriasScalarWhereInput | MateriasScalarWhereInput[]
  }

  export type AlumnosUncheckedUpdateManyWithoutCursosNestedInput = {
    create?: XOR<AlumnosCreateWithoutCursosInput, AlumnosUncheckedCreateWithoutCursosInput> | AlumnosCreateWithoutCursosInput[] | AlumnosUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: AlumnosCreateOrConnectWithoutCursosInput | AlumnosCreateOrConnectWithoutCursosInput[]
    upsert?: AlumnosUpsertWithWhereUniqueWithoutCursosInput | AlumnosUpsertWithWhereUniqueWithoutCursosInput[]
    set?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    disconnect?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    delete?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    connect?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    update?: AlumnosUpdateWithWhereUniqueWithoutCursosInput | AlumnosUpdateWithWhereUniqueWithoutCursosInput[]
    updateMany?: AlumnosUpdateManyWithWhereWithoutCursosInput | AlumnosUpdateManyWithWhereWithoutCursosInput[]
    deleteMany?: AlumnosScalarWhereInput | AlumnosScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadosFilter<$PrismaModel = never> = {
    equals?: $Enums.Estados | EnumEstadosFieldRefInput<$PrismaModel>
    in?: $Enums.Estados[] | ListEnumEstadosFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estados[] | ListEnumEstadosFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadosFilter<$PrismaModel> | $Enums.Estados
  }

  export type NestedEnumEstadosWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estados | EnumEstadosFieldRefInput<$PrismaModel>
    in?: $Enums.Estados[] | ListEnumEstadosFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estados[] | ListEnumEstadosFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadosWithAggregatesFilter<$PrismaModel> | $Enums.Estados
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadosFilter<$PrismaModel>
    _max?: NestedEnumEstadosFilter<$PrismaModel>
  }

  export type AsistenciasCreateWithoutAlumnoInput = {
    estado?: $Enums.Estados
    nota?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    clase: ClasesCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciasUncheckedCreateWithoutAlumnoInput = {
    id?: number
    idClase: number
    estado?: $Enums.Estados
    nota?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AsistenciasCreateOrConnectWithoutAlumnoInput = {
    where: AsistenciasWhereUniqueInput
    create: XOR<AsistenciasCreateWithoutAlumnoInput, AsistenciasUncheckedCreateWithoutAlumnoInput>
  }

  export type AsistenciasCreateManyAlumnoInputEnvelope = {
    data: AsistenciasCreateManyAlumnoInput | AsistenciasCreateManyAlumnoInput[]
    skipDuplicates?: boolean
  }

  export type CursosCreateWithoutAlumnosInput = {
    nombre: string
    turno?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materias?: MateriasCreateNestedManyWithoutCursoInput
  }

  export type CursosUncheckedCreateWithoutAlumnosInput = {
    id?: number
    nombre: string
    turno?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Materias?: MateriasUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursosCreateOrConnectWithoutAlumnosInput = {
    where: CursosWhereUniqueInput
    create: XOR<CursosCreateWithoutAlumnosInput, CursosUncheckedCreateWithoutAlumnosInput>
  }

  export type AsistenciasUpsertWithWhereUniqueWithoutAlumnoInput = {
    where: AsistenciasWhereUniqueInput
    update: XOR<AsistenciasUpdateWithoutAlumnoInput, AsistenciasUncheckedUpdateWithoutAlumnoInput>
    create: XOR<AsistenciasCreateWithoutAlumnoInput, AsistenciasUncheckedCreateWithoutAlumnoInput>
  }

  export type AsistenciasUpdateWithWhereUniqueWithoutAlumnoInput = {
    where: AsistenciasWhereUniqueInput
    data: XOR<AsistenciasUpdateWithoutAlumnoInput, AsistenciasUncheckedUpdateWithoutAlumnoInput>
  }

  export type AsistenciasUpdateManyWithWhereWithoutAlumnoInput = {
    where: AsistenciasScalarWhereInput
    data: XOR<AsistenciasUpdateManyMutationInput, AsistenciasUncheckedUpdateManyWithoutAlumnoInput>
  }

  export type AsistenciasScalarWhereInput = {
    AND?: AsistenciasScalarWhereInput | AsistenciasScalarWhereInput[]
    OR?: AsistenciasScalarWhereInput[]
    NOT?: AsistenciasScalarWhereInput | AsistenciasScalarWhereInput[]
    id?: IntFilter<"Asistencias"> | number
    idAlumno?: IntFilter<"Asistencias"> | number
    idClase?: IntFilter<"Asistencias"> | number
    estado?: EnumEstadosFilter<"Asistencias"> | $Enums.Estados
    nota?: StringNullableFilter<"Asistencias"> | string | null
    createdAt?: DateTimeFilter<"Asistencias"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Asistencias"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Asistencias"> | Date | string | null
  }

  export type CursosUpsertWithWhereUniqueWithoutAlumnosInput = {
    where: CursosWhereUniqueInput
    update: XOR<CursosUpdateWithoutAlumnosInput, CursosUncheckedUpdateWithoutAlumnosInput>
    create: XOR<CursosCreateWithoutAlumnosInput, CursosUncheckedCreateWithoutAlumnosInput>
  }

  export type CursosUpdateWithWhereUniqueWithoutAlumnosInput = {
    where: CursosWhereUniqueInput
    data: XOR<CursosUpdateWithoutAlumnosInput, CursosUncheckedUpdateWithoutAlumnosInput>
  }

  export type CursosUpdateManyWithWhereWithoutAlumnosInput = {
    where: CursosScalarWhereInput
    data: XOR<CursosUpdateManyMutationInput, CursosUncheckedUpdateManyWithoutAlumnosInput>
  }

  export type CursosScalarWhereInput = {
    AND?: CursosScalarWhereInput | CursosScalarWhereInput[]
    OR?: CursosScalarWhereInput[]
    NOT?: CursosScalarWhereInput | CursosScalarWhereInput[]
    id?: IntFilter<"Cursos"> | number
    nombre?: StringFilter<"Cursos"> | string
    turno?: StringNullableFilter<"Cursos"> | string | null
    createdAt?: DateTimeFilter<"Cursos"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Cursos"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Cursos"> | Date | string | null
  }

  export type MateriasCreateWithoutClasesInput = {
    nombre: string
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    userDocente: UsersDocentesCreateNestedOneWithoutMateriasInput
    curso: CursosCreateNestedOneWithoutMateriasInput
    DiasHorariosClases?: DiasHorariosClasesCreateNestedManyWithoutMateriaInput
  }

  export type MateriasUncheckedCreateWithoutClasesInput = {
    id?: number
    nombre: string
    idUserDocente: number
    idCurso: number
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    DiasHorariosClases?: DiasHorariosClasesUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriasCreateOrConnectWithoutClasesInput = {
    where: MateriasWhereUniqueInput
    create: XOR<MateriasCreateWithoutClasesInput, MateriasUncheckedCreateWithoutClasesInput>
  }

  export type AsistenciasCreateWithoutClaseInput = {
    estado?: $Enums.Estados
    nota?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    alumno: AlumnosCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciasUncheckedCreateWithoutClaseInput = {
    id?: number
    idAlumno: number
    estado?: $Enums.Estados
    nota?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AsistenciasCreateOrConnectWithoutClaseInput = {
    where: AsistenciasWhereUniqueInput
    create: XOR<AsistenciasCreateWithoutClaseInput, AsistenciasUncheckedCreateWithoutClaseInput>
  }

  export type AsistenciasCreateManyClaseInputEnvelope = {
    data: AsistenciasCreateManyClaseInput | AsistenciasCreateManyClaseInput[]
    skipDuplicates?: boolean
  }

  export type MateriasUpsertWithoutClasesInput = {
    update: XOR<MateriasUpdateWithoutClasesInput, MateriasUncheckedUpdateWithoutClasesInput>
    create: XOR<MateriasCreateWithoutClasesInput, MateriasUncheckedCreateWithoutClasesInput>
    where?: MateriasWhereInput
  }

  export type MateriasUpdateToOneWithWhereWithoutClasesInput = {
    where?: MateriasWhereInput
    data: XOR<MateriasUpdateWithoutClasesInput, MateriasUncheckedUpdateWithoutClasesInput>
  }

  export type MateriasUpdateWithoutClasesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userDocente?: UsersDocentesUpdateOneRequiredWithoutMateriasNestedInput
    curso?: CursosUpdateOneRequiredWithoutMateriasNestedInput
    DiasHorariosClases?: DiasHorariosClasesUpdateManyWithoutMateriaNestedInput
  }

  export type MateriasUncheckedUpdateWithoutClasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idUserDocente?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DiasHorariosClases?: DiasHorariosClasesUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type AsistenciasUpsertWithWhereUniqueWithoutClaseInput = {
    where: AsistenciasWhereUniqueInput
    update: XOR<AsistenciasUpdateWithoutClaseInput, AsistenciasUncheckedUpdateWithoutClaseInput>
    create: XOR<AsistenciasCreateWithoutClaseInput, AsistenciasUncheckedCreateWithoutClaseInput>
  }

  export type AsistenciasUpdateWithWhereUniqueWithoutClaseInput = {
    where: AsistenciasWhereUniqueInput
    data: XOR<AsistenciasUpdateWithoutClaseInput, AsistenciasUncheckedUpdateWithoutClaseInput>
  }

  export type AsistenciasUpdateManyWithWhereWithoutClaseInput = {
    where: AsistenciasScalarWhereInput
    data: XOR<AsistenciasUpdateManyMutationInput, AsistenciasUncheckedUpdateManyWithoutClaseInput>
  }

  export type AlumnosCreateWithoutAsistenciasInput = {
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Cursos?: CursosCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnosUncheckedCreateWithoutAsistenciasInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Cursos?: CursosUncheckedCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnosCreateOrConnectWithoutAsistenciasInput = {
    where: AlumnosWhereUniqueInput
    create: XOR<AlumnosCreateWithoutAsistenciasInput, AlumnosUncheckedCreateWithoutAsistenciasInput>
  }

  export type ClasesCreateWithoutAsistenciasInput = {
    fechaHora: Date | string
    suspendida?: boolean
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    materia: MateriasCreateNestedOneWithoutClasesInput
  }

  export type ClasesUncheckedCreateWithoutAsistenciasInput = {
    id?: number
    fechaHora: Date | string
    idMateria: number
    suspendida?: boolean
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ClasesCreateOrConnectWithoutAsistenciasInput = {
    where: ClasesWhereUniqueInput
    create: XOR<ClasesCreateWithoutAsistenciasInput, ClasesUncheckedCreateWithoutAsistenciasInput>
  }

  export type AlumnosUpsertWithoutAsistenciasInput = {
    update: XOR<AlumnosUpdateWithoutAsistenciasInput, AlumnosUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<AlumnosCreateWithoutAsistenciasInput, AlumnosUncheckedCreateWithoutAsistenciasInput>
    where?: AlumnosWhereInput
  }

  export type AlumnosUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: AlumnosWhereInput
    data: XOR<AlumnosUpdateWithoutAsistenciasInput, AlumnosUncheckedUpdateWithoutAsistenciasInput>
  }

  export type AlumnosUpdateWithoutAsistenciasInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cursos?: CursosUpdateManyWithoutAlumnosNestedInput
  }

  export type AlumnosUncheckedUpdateWithoutAsistenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cursos?: CursosUncheckedUpdateManyWithoutAlumnosNestedInput
  }

  export type ClasesUpsertWithoutAsistenciasInput = {
    update: XOR<ClasesUpdateWithoutAsistenciasInput, ClasesUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<ClasesCreateWithoutAsistenciasInput, ClasesUncheckedCreateWithoutAsistenciasInput>
    where?: ClasesWhereInput
  }

  export type ClasesUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: ClasesWhereInput
    data: XOR<ClasesUpdateWithoutAsistenciasInput, ClasesUncheckedUpdateWithoutAsistenciasInput>
  }

  export type ClasesUpdateWithoutAsistenciasInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendida?: BoolFieldUpdateOperationsInput | boolean
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    materia?: MateriasUpdateOneRequiredWithoutClasesNestedInput
  }

  export type ClasesUncheckedUpdateWithoutAsistenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    idMateria?: IntFieldUpdateOperationsInput | number
    suspendida?: BoolFieldUpdateOperationsInput | boolean
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MateriasCreateWithoutUserDocenteInput = {
    nombre: string
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    curso: CursosCreateNestedOneWithoutMateriasInput
    Clases?: ClasesCreateNestedManyWithoutMateriaInput
    DiasHorariosClases?: DiasHorariosClasesCreateNestedManyWithoutMateriaInput
  }

  export type MateriasUncheckedCreateWithoutUserDocenteInput = {
    id?: number
    nombre: string
    idCurso: number
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Clases?: ClasesUncheckedCreateNestedManyWithoutMateriaInput
    DiasHorariosClases?: DiasHorariosClasesUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriasCreateOrConnectWithoutUserDocenteInput = {
    where: MateriasWhereUniqueInput
    create: XOR<MateriasCreateWithoutUserDocenteInput, MateriasUncheckedCreateWithoutUserDocenteInput>
  }

  export type MateriasCreateManyUserDocenteInputEnvelope = {
    data: MateriasCreateManyUserDocenteInput | MateriasCreateManyUserDocenteInput[]
    skipDuplicates?: boolean
  }

  export type MateriasUpsertWithWhereUniqueWithoutUserDocenteInput = {
    where: MateriasWhereUniqueInput
    update: XOR<MateriasUpdateWithoutUserDocenteInput, MateriasUncheckedUpdateWithoutUserDocenteInput>
    create: XOR<MateriasCreateWithoutUserDocenteInput, MateriasUncheckedCreateWithoutUserDocenteInput>
  }

  export type MateriasUpdateWithWhereUniqueWithoutUserDocenteInput = {
    where: MateriasWhereUniqueInput
    data: XOR<MateriasUpdateWithoutUserDocenteInput, MateriasUncheckedUpdateWithoutUserDocenteInput>
  }

  export type MateriasUpdateManyWithWhereWithoutUserDocenteInput = {
    where: MateriasScalarWhereInput
    data: XOR<MateriasUpdateManyMutationInput, MateriasUncheckedUpdateManyWithoutUserDocenteInput>
  }

  export type MateriasScalarWhereInput = {
    AND?: MateriasScalarWhereInput | MateriasScalarWhereInput[]
    OR?: MateriasScalarWhereInput[]
    NOT?: MateriasScalarWhereInput | MateriasScalarWhereInput[]
    id?: IntFilter<"Materias"> | number
    nombre?: StringFilter<"Materias"> | string
    idUserDocente?: IntFilter<"Materias"> | number
    idCurso?: IntFilter<"Materias"> | number
    fechaInicio?: DateTimeFilter<"Materias"> | Date | string
    fechaFin?: DateTimeFilter<"Materias"> | Date | string
    createdAt?: DateTimeFilter<"Materias"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Materias"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Materias"> | Date | string | null
  }

  export type UsersDocentesCreateWithoutMateriasInput = {
    email: string
    password: string
    nombre: string
    apellido: string
    rol?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UsersDocentesUncheckedCreateWithoutMateriasInput = {
    id?: number
    email: string
    password: string
    nombre: string
    apellido: string
    rol?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UsersDocentesCreateOrConnectWithoutMateriasInput = {
    where: UsersDocentesWhereUniqueInput
    create: XOR<UsersDocentesCreateWithoutMateriasInput, UsersDocentesUncheckedCreateWithoutMateriasInput>
  }

  export type CursosCreateWithoutMateriasInput = {
    nombre: string
    turno?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Alumnos?: AlumnosCreateNestedManyWithoutCursosInput
  }

  export type CursosUncheckedCreateWithoutMateriasInput = {
    id?: number
    nombre: string
    turno?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Alumnos?: AlumnosUncheckedCreateNestedManyWithoutCursosInput
  }

  export type CursosCreateOrConnectWithoutMateriasInput = {
    where: CursosWhereUniqueInput
    create: XOR<CursosCreateWithoutMateriasInput, CursosUncheckedCreateWithoutMateriasInput>
  }

  export type ClasesCreateWithoutMateriaInput = {
    fechaHora: Date | string
    suspendida?: boolean
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencias?: AsistenciasCreateNestedManyWithoutClaseInput
  }

  export type ClasesUncheckedCreateWithoutMateriaInput = {
    id?: number
    fechaHora: Date | string
    suspendida?: boolean
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencias?: AsistenciasUncheckedCreateNestedManyWithoutClaseInput
  }

  export type ClasesCreateOrConnectWithoutMateriaInput = {
    where: ClasesWhereUniqueInput
    create: XOR<ClasesCreateWithoutMateriaInput, ClasesUncheckedCreateWithoutMateriaInput>
  }

  export type ClasesCreateManyMateriaInputEnvelope = {
    data: ClasesCreateManyMateriaInput | ClasesCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type DiasHorariosClasesCreateWithoutMateriaInput = {
    dias?: DiasHorariosClasesCreatediasInput | $Enums.Dias[]
    horaInicio: string
    duracionMinutos: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type DiasHorariosClasesUncheckedCreateWithoutMateriaInput = {
    id?: number
    dias?: DiasHorariosClasesCreatediasInput | $Enums.Dias[]
    horaInicio: string
    duracionMinutos: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type DiasHorariosClasesCreateOrConnectWithoutMateriaInput = {
    where: DiasHorariosClasesWhereUniqueInput
    create: XOR<DiasHorariosClasesCreateWithoutMateriaInput, DiasHorariosClasesUncheckedCreateWithoutMateriaInput>
  }

  export type DiasHorariosClasesCreateManyMateriaInputEnvelope = {
    data: DiasHorariosClasesCreateManyMateriaInput | DiasHorariosClasesCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type UsersDocentesUpsertWithoutMateriasInput = {
    update: XOR<UsersDocentesUpdateWithoutMateriasInput, UsersDocentesUncheckedUpdateWithoutMateriasInput>
    create: XOR<UsersDocentesCreateWithoutMateriasInput, UsersDocentesUncheckedCreateWithoutMateriasInput>
    where?: UsersDocentesWhereInput
  }

  export type UsersDocentesUpdateToOneWithWhereWithoutMateriasInput = {
    where?: UsersDocentesWhereInput
    data: XOR<UsersDocentesUpdateWithoutMateriasInput, UsersDocentesUncheckedUpdateWithoutMateriasInput>
  }

  export type UsersDocentesUpdateWithoutMateriasInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersDocentesUncheckedUpdateWithoutMateriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CursosUpsertWithoutMateriasInput = {
    update: XOR<CursosUpdateWithoutMateriasInput, CursosUncheckedUpdateWithoutMateriasInput>
    create: XOR<CursosCreateWithoutMateriasInput, CursosUncheckedCreateWithoutMateriasInput>
    where?: CursosWhereInput
  }

  export type CursosUpdateToOneWithWhereWithoutMateriasInput = {
    where?: CursosWhereInput
    data: XOR<CursosUpdateWithoutMateriasInput, CursosUncheckedUpdateWithoutMateriasInput>
  }

  export type CursosUpdateWithoutMateriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Alumnos?: AlumnosUpdateManyWithoutCursosNestedInput
  }

  export type CursosUncheckedUpdateWithoutMateriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Alumnos?: AlumnosUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type ClasesUpsertWithWhereUniqueWithoutMateriaInput = {
    where: ClasesWhereUniqueInput
    update: XOR<ClasesUpdateWithoutMateriaInput, ClasesUncheckedUpdateWithoutMateriaInput>
    create: XOR<ClasesCreateWithoutMateriaInput, ClasesUncheckedCreateWithoutMateriaInput>
  }

  export type ClasesUpdateWithWhereUniqueWithoutMateriaInput = {
    where: ClasesWhereUniqueInput
    data: XOR<ClasesUpdateWithoutMateriaInput, ClasesUncheckedUpdateWithoutMateriaInput>
  }

  export type ClasesUpdateManyWithWhereWithoutMateriaInput = {
    where: ClasesScalarWhereInput
    data: XOR<ClasesUpdateManyMutationInput, ClasesUncheckedUpdateManyWithoutMateriaInput>
  }

  export type ClasesScalarWhereInput = {
    AND?: ClasesScalarWhereInput | ClasesScalarWhereInput[]
    OR?: ClasesScalarWhereInput[]
    NOT?: ClasesScalarWhereInput | ClasesScalarWhereInput[]
    id?: IntFilter<"Clases"> | number
    fechaHora?: DateTimeFilter<"Clases"> | Date | string
    idMateria?: IntFilter<"Clases"> | number
    suspendida?: BoolFilter<"Clases"> | boolean
    motivo?: StringNullableFilter<"Clases"> | string | null
    createdAt?: DateTimeFilter<"Clases"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Clases"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Clases"> | Date | string | null
  }

  export type DiasHorariosClasesUpsertWithWhereUniqueWithoutMateriaInput = {
    where: DiasHorariosClasesWhereUniqueInput
    update: XOR<DiasHorariosClasesUpdateWithoutMateriaInput, DiasHorariosClasesUncheckedUpdateWithoutMateriaInput>
    create: XOR<DiasHorariosClasesCreateWithoutMateriaInput, DiasHorariosClasesUncheckedCreateWithoutMateriaInput>
  }

  export type DiasHorariosClasesUpdateWithWhereUniqueWithoutMateriaInput = {
    where: DiasHorariosClasesWhereUniqueInput
    data: XOR<DiasHorariosClasesUpdateWithoutMateriaInput, DiasHorariosClasesUncheckedUpdateWithoutMateriaInput>
  }

  export type DiasHorariosClasesUpdateManyWithWhereWithoutMateriaInput = {
    where: DiasHorariosClasesScalarWhereInput
    data: XOR<DiasHorariosClasesUpdateManyMutationInput, DiasHorariosClasesUncheckedUpdateManyWithoutMateriaInput>
  }

  export type DiasHorariosClasesScalarWhereInput = {
    AND?: DiasHorariosClasesScalarWhereInput | DiasHorariosClasesScalarWhereInput[]
    OR?: DiasHorariosClasesScalarWhereInput[]
    NOT?: DiasHorariosClasesScalarWhereInput | DiasHorariosClasesScalarWhereInput[]
    id?: IntFilter<"DiasHorariosClases"> | number
    idMateria?: IntFilter<"DiasHorariosClases"> | number
    dias?: EnumDiasNullableListFilter<"DiasHorariosClases">
    horaInicio?: StringFilter<"DiasHorariosClases"> | string
    duracionMinutos?: IntFilter<"DiasHorariosClases"> | number
    createdAt?: DateTimeFilter<"DiasHorariosClases"> | Date | string
    updatedAt?: DateTimeNullableFilter<"DiasHorariosClases"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"DiasHorariosClases"> | Date | string | null
  }

  export type MateriasCreateWithoutDiasHorariosClasesInput = {
    nombre: string
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    userDocente: UsersDocentesCreateNestedOneWithoutMateriasInput
    curso: CursosCreateNestedOneWithoutMateriasInput
    Clases?: ClasesCreateNestedManyWithoutMateriaInput
  }

  export type MateriasUncheckedCreateWithoutDiasHorariosClasesInput = {
    id?: number
    nombre: string
    idUserDocente: number
    idCurso: number
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Clases?: ClasesUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriasCreateOrConnectWithoutDiasHorariosClasesInput = {
    where: MateriasWhereUniqueInput
    create: XOR<MateriasCreateWithoutDiasHorariosClasesInput, MateriasUncheckedCreateWithoutDiasHorariosClasesInput>
  }

  export type MateriasUpsertWithoutDiasHorariosClasesInput = {
    update: XOR<MateriasUpdateWithoutDiasHorariosClasesInput, MateriasUncheckedUpdateWithoutDiasHorariosClasesInput>
    create: XOR<MateriasCreateWithoutDiasHorariosClasesInput, MateriasUncheckedCreateWithoutDiasHorariosClasesInput>
    where?: MateriasWhereInput
  }

  export type MateriasUpdateToOneWithWhereWithoutDiasHorariosClasesInput = {
    where?: MateriasWhereInput
    data: XOR<MateriasUpdateWithoutDiasHorariosClasesInput, MateriasUncheckedUpdateWithoutDiasHorariosClasesInput>
  }

  export type MateriasUpdateWithoutDiasHorariosClasesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userDocente?: UsersDocentesUpdateOneRequiredWithoutMateriasNestedInput
    curso?: CursosUpdateOneRequiredWithoutMateriasNestedInput
    Clases?: ClasesUpdateManyWithoutMateriaNestedInput
  }

  export type MateriasUncheckedUpdateWithoutDiasHorariosClasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idUserDocente?: IntFieldUpdateOperationsInput | number
    idCurso?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Clases?: ClasesUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriasCreateWithoutCursoInput = {
    nombre: string
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    userDocente: UsersDocentesCreateNestedOneWithoutMateriasInput
    Clases?: ClasesCreateNestedManyWithoutMateriaInput
    DiasHorariosClases?: DiasHorariosClasesCreateNestedManyWithoutMateriaInput
  }

  export type MateriasUncheckedCreateWithoutCursoInput = {
    id?: number
    nombre: string
    idUserDocente: number
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Clases?: ClasesUncheckedCreateNestedManyWithoutMateriaInput
    DiasHorariosClases?: DiasHorariosClasesUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriasCreateOrConnectWithoutCursoInput = {
    where: MateriasWhereUniqueInput
    create: XOR<MateriasCreateWithoutCursoInput, MateriasUncheckedCreateWithoutCursoInput>
  }

  export type MateriasCreateManyCursoInputEnvelope = {
    data: MateriasCreateManyCursoInput | MateriasCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type AlumnosCreateWithoutCursosInput = {
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencias?: AsistenciasCreateNestedManyWithoutAlumnoInput
  }

  export type AlumnosUncheckedCreateWithoutCursosInput = {
    id?: number
    legajo: string
    nombre: string
    apellido: string
    celular: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    Asistencias?: AsistenciasUncheckedCreateNestedManyWithoutAlumnoInput
  }

  export type AlumnosCreateOrConnectWithoutCursosInput = {
    where: AlumnosWhereUniqueInput
    create: XOR<AlumnosCreateWithoutCursosInput, AlumnosUncheckedCreateWithoutCursosInput>
  }

  export type MateriasUpsertWithWhereUniqueWithoutCursoInput = {
    where: MateriasWhereUniqueInput
    update: XOR<MateriasUpdateWithoutCursoInput, MateriasUncheckedUpdateWithoutCursoInput>
    create: XOR<MateriasCreateWithoutCursoInput, MateriasUncheckedCreateWithoutCursoInput>
  }

  export type MateriasUpdateWithWhereUniqueWithoutCursoInput = {
    where: MateriasWhereUniqueInput
    data: XOR<MateriasUpdateWithoutCursoInput, MateriasUncheckedUpdateWithoutCursoInput>
  }

  export type MateriasUpdateManyWithWhereWithoutCursoInput = {
    where: MateriasScalarWhereInput
    data: XOR<MateriasUpdateManyMutationInput, MateriasUncheckedUpdateManyWithoutCursoInput>
  }

  export type AlumnosUpsertWithWhereUniqueWithoutCursosInput = {
    where: AlumnosWhereUniqueInput
    update: XOR<AlumnosUpdateWithoutCursosInput, AlumnosUncheckedUpdateWithoutCursosInput>
    create: XOR<AlumnosCreateWithoutCursosInput, AlumnosUncheckedCreateWithoutCursosInput>
  }

  export type AlumnosUpdateWithWhereUniqueWithoutCursosInput = {
    where: AlumnosWhereUniqueInput
    data: XOR<AlumnosUpdateWithoutCursosInput, AlumnosUncheckedUpdateWithoutCursosInput>
  }

  export type AlumnosUpdateManyWithWhereWithoutCursosInput = {
    where: AlumnosScalarWhereInput
    data: XOR<AlumnosUpdateManyMutationInput, AlumnosUncheckedUpdateManyWithoutCursosInput>
  }

  export type AlumnosScalarWhereInput = {
    AND?: AlumnosScalarWhereInput | AlumnosScalarWhereInput[]
    OR?: AlumnosScalarWhereInput[]
    NOT?: AlumnosScalarWhereInput | AlumnosScalarWhereInput[]
    id?: IntFilter<"Alumnos"> | number
    legajo?: StringFilter<"Alumnos"> | string
    nombre?: StringFilter<"Alumnos"> | string
    apellido?: StringFilter<"Alumnos"> | string
    celular?: StringFilter<"Alumnos"> | string
    createdAt?: DateTimeFilter<"Alumnos"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Alumnos"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Alumnos"> | Date | string | null
  }

  export type AsistenciasCreateManyAlumnoInput = {
    id?: number
    idClase: number
    estado?: $Enums.Estados
    nota?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AsistenciasUpdateWithoutAlumnoInput = {
    estado?: EnumEstadosFieldUpdateOperationsInput | $Enums.Estados
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clase?: ClasesUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type AsistenciasUncheckedUpdateWithoutAlumnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idClase?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadosFieldUpdateOperationsInput | $Enums.Estados
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsistenciasUncheckedUpdateManyWithoutAlumnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idClase?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadosFieldUpdateOperationsInput | $Enums.Estados
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CursosUpdateWithoutAlumnosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materias?: MateriasUpdateManyWithoutCursoNestedInput
  }

  export type CursosUncheckedUpdateWithoutAlumnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materias?: MateriasUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursosUncheckedUpdateManyWithoutAlumnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsistenciasCreateManyClaseInput = {
    id?: number
    idAlumno: number
    estado?: $Enums.Estados
    nota?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AsistenciasUpdateWithoutClaseInput = {
    estado?: EnumEstadosFieldUpdateOperationsInput | $Enums.Estados
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alumno?: AlumnosUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type AsistenciasUncheckedUpdateWithoutClaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAlumno?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadosFieldUpdateOperationsInput | $Enums.Estados
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsistenciasUncheckedUpdateManyWithoutClaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAlumno?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadosFieldUpdateOperationsInput | $Enums.Estados
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MateriasCreateManyUserDocenteInput = {
    id?: number
    nombre: string
    idCurso: number
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MateriasUpdateWithoutUserDocenteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curso?: CursosUpdateOneRequiredWithoutMateriasNestedInput
    Clases?: ClasesUpdateManyWithoutMateriaNestedInput
    DiasHorariosClases?: DiasHorariosClasesUpdateManyWithoutMateriaNestedInput
  }

  export type MateriasUncheckedUpdateWithoutUserDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idCurso?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Clases?: ClasesUncheckedUpdateManyWithoutMateriaNestedInput
    DiasHorariosClases?: DiasHorariosClasesUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriasUncheckedUpdateManyWithoutUserDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idCurso?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClasesCreateManyMateriaInput = {
    id?: number
    fechaHora: Date | string
    suspendida?: boolean
    motivo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type DiasHorariosClasesCreateManyMateriaInput = {
    id?: number
    dias?: DiasHorariosClasesCreatediasInput | $Enums.Dias[]
    horaInicio: string
    duracionMinutos: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type ClasesUpdateWithoutMateriaInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendida?: BoolFieldUpdateOperationsInput | boolean
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencias?: AsistenciasUpdateManyWithoutClaseNestedInput
  }

  export type ClasesUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendida?: BoolFieldUpdateOperationsInput | boolean
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencias?: AsistenciasUncheckedUpdateManyWithoutClaseNestedInput
  }

  export type ClasesUncheckedUpdateManyWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendida?: BoolFieldUpdateOperationsInput | boolean
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DiasHorariosClasesUpdateWithoutMateriaInput = {
    dias?: DiasHorariosClasesUpdatediasInput | $Enums.Dias[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DiasHorariosClasesUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dias?: DiasHorariosClasesUpdatediasInput | $Enums.Dias[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DiasHorariosClasesUncheckedUpdateManyWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dias?: DiasHorariosClasesUpdatediasInput | $Enums.Dias[]
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MateriasCreateManyCursoInput = {
    id?: number
    nombre: string
    idUserDocente: number
    fechaInicio: Date | string
    fechaFin: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MateriasUpdateWithoutCursoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userDocente?: UsersDocentesUpdateOneRequiredWithoutMateriasNestedInput
    Clases?: ClasesUpdateManyWithoutMateriaNestedInput
    DiasHorariosClases?: DiasHorariosClasesUpdateManyWithoutMateriaNestedInput
  }

  export type MateriasUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idUserDocente?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Clases?: ClasesUncheckedUpdateManyWithoutMateriaNestedInput
    DiasHorariosClases?: DiasHorariosClasesUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriasUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    idUserDocente?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlumnosUpdateWithoutCursosInput = {
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencias?: AsistenciasUpdateManyWithoutAlumnoNestedInput
  }

  export type AlumnosUncheckedUpdateWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    legajo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Asistencias?: AsistenciasUncheckedUpdateManyWithoutAlumnoNestedInput
  }

  export type AlumnosUncheckedUpdateManyWithoutCursosInput = {
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