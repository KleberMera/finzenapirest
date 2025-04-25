
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model NotificationPreference
 * 
 */
export type NotificationPreference = $Result.DefaultSelection<Prisma.$NotificationPreferencePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model VerificationCode
 * 
 */
export type VerificationCode = $Result.DefaultSelection<Prisma.$VerificationCodePayload>
/**
 * Model Debt
 * 
 */
export type Debt = $Result.DefaultSelection<Prisma.$DebtPayload>
/**
 * Model Amortization
 * 
 */
export type Amortization = $Result.DefaultSelection<Prisma.$AmortizationPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Meta
 * 
 */
export type Meta = $Result.DefaultSelection<Prisma.$MetaPayload>
/**
 * Model MetaTracking
 * 
 */
export type MetaTracking = $Result.DefaultSelection<Prisma.$MetaTrackingPayload>
/**
 * Model SalaryHistory
 * 
 */
export type SalaryHistory = $Result.DefaultSelection<Prisma.$SalaryHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
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
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationPreference`: Exposes CRUD operations for the **NotificationPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationPreferences
    * const notificationPreferences = await prisma.notificationPreference.findMany()
    * ```
    */
  get notificationPreference(): Prisma.NotificationPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationCode`: Exposes CRUD operations for the **VerificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCode.findMany()
    * ```
    */
  get verificationCode(): Prisma.VerificationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.debt`: Exposes CRUD operations for the **Debt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Debts
    * const debts = await prisma.debt.findMany()
    * ```
    */
  get debt(): Prisma.DebtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amortization`: Exposes CRUD operations for the **Amortization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amortizations
    * const amortizations = await prisma.amortization.findMany()
    * ```
    */
  get amortization(): Prisma.AmortizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meta`: Exposes CRUD operations for the **Meta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metas
    * const metas = await prisma.meta.findMany()
    * ```
    */
  get meta(): Prisma.MetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metaTracking`: Exposes CRUD operations for the **MetaTracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetaTrackings
    * const metaTrackings = await prisma.metaTracking.findMany()
    * ```
    */
  get metaTracking(): Prisma.MetaTrackingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salaryHistory`: Exposes CRUD operations for the **SalaryHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalaryHistories
    * const salaryHistories = await prisma.salaryHistory.findMany()
    * ```
    */
  get salaryHistory(): Prisma.SalaryHistoryDelegate<ExtArgs, ClientOptions>;
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
    Role: 'Role',
    User: 'User',
    Device: 'Device',
    NotificationPreference: 'NotificationPreference',
    Notification: 'Notification',
    VerificationCode: 'VerificationCode',
    Debt: 'Debt',
    Amortization: 'Amortization',
    Category: 'Category',
    Transaction: 'Transaction',
    Meta: 'Meta',
    MetaTracking: 'MetaTracking',
    SalaryHistory: 'SalaryHistory'
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
      modelProps: "role" | "user" | "device" | "notificationPreference" | "notification" | "verificationCode" | "debt" | "amortization" | "category" | "transaction" | "meta" | "metaTracking" | "salaryHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      NotificationPreference: {
        payload: Prisma.$NotificationPreferencePayload<ExtArgs>
        fields: Prisma.NotificationPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>
          }
          findFirst: {
            args: Prisma.NotificationPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>
          }
          findMany: {
            args: Prisma.NotificationPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[]
          }
          create: {
            args: Prisma.NotificationPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>
          }
          createMany: {
            args: Prisma.NotificationPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[]
          }
          delete: {
            args: Prisma.NotificationPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>
          }
          update: {
            args: Prisma.NotificationPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>
          }
          deleteMany: {
            args: Prisma.NotificationPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[]
          }
          upsert: {
            args: Prisma.NotificationPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>
          }
          aggregate: {
            args: Prisma.NotificationPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationPreference>
          }
          groupBy: {
            args: Prisma.NotificationPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationPreferenceCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      VerificationCode: {
        payload: Prisma.$VerificationCodePayload<ExtArgs>
        fields: Prisma.VerificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findFirst: {
            args: Prisma.VerificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findMany: {
            args: Prisma.VerificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          create: {
            args: Prisma.VerificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          createMany: {
            args: Prisma.VerificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          delete: {
            args: Prisma.VerificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          update: {
            args: Prisma.VerificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          upsert: {
            args: Prisma.VerificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          aggregate: {
            args: Prisma.VerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCode>
          }
          groupBy: {
            args: Prisma.VerificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeCountAggregateOutputType> | number
          }
        }
      }
      Debt: {
        payload: Prisma.$DebtPayload<ExtArgs>
        fields: Prisma.DebtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          findFirst: {
            args: Prisma.DebtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          findMany: {
            args: Prisma.DebtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>[]
          }
          create: {
            args: Prisma.DebtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          createMany: {
            args: Prisma.DebtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DebtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>[]
          }
          delete: {
            args: Prisma.DebtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          update: {
            args: Prisma.DebtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          deleteMany: {
            args: Prisma.DebtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DebtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DebtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>[]
          }
          upsert: {
            args: Prisma.DebtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          aggregate: {
            args: Prisma.DebtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDebt>
          }
          groupBy: {
            args: Prisma.DebtGroupByArgs<ExtArgs>
            result: $Utils.Optional<DebtGroupByOutputType>[]
          }
          count: {
            args: Prisma.DebtCountArgs<ExtArgs>
            result: $Utils.Optional<DebtCountAggregateOutputType> | number
          }
        }
      }
      Amortization: {
        payload: Prisma.$AmortizationPayload<ExtArgs>
        fields: Prisma.AmortizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmortizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmortizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmortizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmortizationPayload>
          }
          findFirst: {
            args: Prisma.AmortizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmortizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmortizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmortizationPayload>
          }
          findMany: {
            args: Prisma.AmortizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmortizationPayload>[]
          }
          create: {
            args: Prisma.AmortizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmortizationPayload>
          }
          createMany: {
            args: Prisma.AmortizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmortizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmortizationPayload>[]
          }
          delete: {
            args: Prisma.AmortizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmortizationPayload>
          }
          update: {
            args: Prisma.AmortizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmortizationPayload>
          }
          deleteMany: {
            args: Prisma.AmortizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmortizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmortizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmortizationPayload>[]
          }
          upsert: {
            args: Prisma.AmortizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmortizationPayload>
          }
          aggregate: {
            args: Prisma.AmortizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmortization>
          }
          groupBy: {
            args: Prisma.AmortizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmortizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmortizationCountArgs<ExtArgs>
            result: $Utils.Optional<AmortizationCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Meta: {
        payload: Prisma.$MetaPayload<ExtArgs>
        fields: Prisma.MetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findFirst: {
            args: Prisma.MetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findMany: {
            args: Prisma.MetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          create: {
            args: Prisma.MetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          createMany: {
            args: Prisma.MetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          delete: {
            args: Prisma.MetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          update: {
            args: Prisma.MetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          deleteMany: {
            args: Prisma.MetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          upsert: {
            args: Prisma.MetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          aggregate: {
            args: Prisma.MetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeta>
          }
          groupBy: {
            args: Prisma.MetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaCountArgs<ExtArgs>
            result: $Utils.Optional<MetaCountAggregateOutputType> | number
          }
        }
      }
      MetaTracking: {
        payload: Prisma.$MetaTrackingPayload<ExtArgs>
        fields: Prisma.MetaTrackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaTrackingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaTrackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaTrackingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaTrackingPayload>
          }
          findFirst: {
            args: Prisma.MetaTrackingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaTrackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaTrackingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaTrackingPayload>
          }
          findMany: {
            args: Prisma.MetaTrackingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaTrackingPayload>[]
          }
          create: {
            args: Prisma.MetaTrackingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaTrackingPayload>
          }
          createMany: {
            args: Prisma.MetaTrackingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetaTrackingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaTrackingPayload>[]
          }
          delete: {
            args: Prisma.MetaTrackingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaTrackingPayload>
          }
          update: {
            args: Prisma.MetaTrackingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaTrackingPayload>
          }
          deleteMany: {
            args: Prisma.MetaTrackingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetaTrackingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetaTrackingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaTrackingPayload>[]
          }
          upsert: {
            args: Prisma.MetaTrackingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaTrackingPayload>
          }
          aggregate: {
            args: Prisma.MetaTrackingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetaTracking>
          }
          groupBy: {
            args: Prisma.MetaTrackingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetaTrackingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaTrackingCountArgs<ExtArgs>
            result: $Utils.Optional<MetaTrackingCountAggregateOutputType> | number
          }
        }
      }
      SalaryHistory: {
        payload: Prisma.$SalaryHistoryPayload<ExtArgs>
        fields: Prisma.SalaryHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaryHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaryHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryHistoryPayload>
          }
          findFirst: {
            args: Prisma.SalaryHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaryHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryHistoryPayload>
          }
          findMany: {
            args: Prisma.SalaryHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryHistoryPayload>[]
          }
          create: {
            args: Prisma.SalaryHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryHistoryPayload>
          }
          createMany: {
            args: Prisma.SalaryHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaryHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryHistoryPayload>[]
          }
          delete: {
            args: Prisma.SalaryHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryHistoryPayload>
          }
          update: {
            args: Prisma.SalaryHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryHistoryPayload>
          }
          deleteMany: {
            args: Prisma.SalaryHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaryHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaryHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryHistoryPayload>[]
          }
          upsert: {
            args: Prisma.SalaryHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryHistoryPayload>
          }
          aggregate: {
            args: Prisma.SalaryHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalaryHistory>
          }
          groupBy: {
            args: Prisma.SalaryHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaryHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaryHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<SalaryHistoryCountAggregateOutputType> | number
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
    role?: RoleOmit
    user?: UserOmit
    device?: DeviceOmit
    notificationPreference?: NotificationPreferenceOmit
    notification?: NotificationOmit
    verificationCode?: VerificationCodeOmit
    debt?: DebtOmit
    amortization?: AmortizationOmit
    category?: CategoryOmit
    transaction?: TransactionOmit
    meta?: MetaOmit
    metaTracking?: MetaTrackingOmit
    salaryHistory?: SalaryHistoryOmit
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    categories: number
    debts: number
    metas: number
    devices: number
    verificationCodes: number
    salary_history: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    debts?: boolean | UserCountOutputTypeCountDebtsArgs
    metas?: boolean | UserCountOutputTypeCountMetasArgs
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
    verificationCodes?: boolean | UserCountOutputTypeCountVerificationCodesArgs
    salary_history?: boolean | UserCountOutputTypeCountSalary_historyArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDebtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalary_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    notificationPreferences: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificationPreferences?: boolean | DeviceCountOutputTypeCountNotificationPreferencesArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountNotificationPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationPreferenceWhereInput
  }


  /**
   * Count Type DebtCountOutputType
   */

  export type DebtCountOutputType = {
    amortizations: number
    notifications: number
  }

  export type DebtCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amortizations?: boolean | DebtCountOutputTypeCountAmortizationsArgs
    notifications?: boolean | DebtCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * DebtCountOutputType without action
   */
  export type DebtCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtCountOutputType
     */
    select?: DebtCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DebtCountOutputType without action
   */
  export type DebtCountOutputTypeCountAmortizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmortizationWhereInput
  }

  /**
   * DebtCountOutputType without action
   */
  export type DebtCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    transactions: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategoryCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type MetaCountOutputType
   */

  export type MetaCountOutputType = {
    trackings: number
  }

  export type MetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackings?: boolean | MetaCountOutputTypeCountTrackingsArgs
  }

  // Custom InputTypes
  /**
   * MetaCountOutputType without action
   */
  export type MetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaCountOutputType
     */
    select?: MetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetaCountOutputType without action
   */
  export type MetaCountOutputTypeCountTrackingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaTrackingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
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
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
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
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
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
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
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
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    rol_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    rol_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    rol_id: number | null
    name: string | null
    last_name: string | null
    username: string | null
    email: string | null
    password: string | null
    phone: string | null
    avatar: string | null
    firebaseUid: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    rol_id: number | null
    name: string | null
    last_name: string | null
    username: string | null
    email: string | null
    password: string | null
    phone: string | null
    avatar: string | null
    firebaseUid: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    rol_id: number
    name: number
    last_name: number
    username: number
    email: number
    password: number
    phone: number
    avatar: number
    firebaseUid: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    rol_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    rol_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    rol_id?: true
    name?: true
    last_name?: true
    username?: true
    email?: true
    password?: true
    phone?: true
    avatar?: true
    firebaseUid?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    rol_id?: true
    name?: true
    last_name?: true
    username?: true
    email?: true
    password?: true
    phone?: true
    avatar?: true
    firebaseUid?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    rol_id?: true
    name?: true
    last_name?: true
    username?: true
    email?: true
    password?: true
    phone?: true
    avatar?: true
    firebaseUid?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    rol_id: number
    name: string | null
    last_name: string | null
    username: string | null
    email: string | null
    password: string | null
    phone: string | null
    avatar: string | null
    firebaseUid: string | null
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rol_id?: boolean
    name?: boolean
    last_name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    avatar?: boolean
    firebaseUid?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    debts?: boolean | User$debtsArgs<ExtArgs>
    metas?: boolean | User$metasArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    verificationCodes?: boolean | User$verificationCodesArgs<ExtArgs>
    salary_history?: boolean | User$salary_historyArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rol_id?: boolean
    name?: boolean
    last_name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    avatar?: boolean
    firebaseUid?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rol_id?: boolean
    name?: boolean
    last_name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    avatar?: boolean
    firebaseUid?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    rol_id?: boolean
    name?: boolean
    last_name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    avatar?: boolean
    firebaseUid?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rol_id" | "name" | "last_name" | "username" | "email" | "password" | "phone" | "avatar" | "firebaseUid" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    debts?: boolean | User$debtsArgs<ExtArgs>
    metas?: boolean | User$metasArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    verificationCodes?: boolean | User$verificationCodesArgs<ExtArgs>
    salary_history?: boolean | User$salary_historyArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      debts: Prisma.$DebtPayload<ExtArgs>[]
      metas: Prisma.$MetaPayload<ExtArgs>[]
      devices: Prisma.$DevicePayload<ExtArgs>[]
      verificationCodes: Prisma.$VerificationCodePayload<ExtArgs>[]
      salary_history: Prisma.$SalaryHistoryPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rol_id: number
      name: string | null
      last_name: string | null
      username: string | null
      email: string | null
      password: string | null
      phone: string | null
      avatar: string | null
      firebaseUid: string | null
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    debts<T extends User$debtsArgs<ExtArgs> = {}>(args?: Subset<T, User$debtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metas<T extends User$metasArgs<ExtArgs> = {}>(args?: Subset<T, User$metasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verificationCodes<T extends User$verificationCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    salary_history<T extends User$salary_historyArgs<ExtArgs> = {}>(args?: Subset<T, User$salary_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly rol_id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly firebaseUid: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * User.debts
   */
  export type User$debtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    where?: DebtWhereInput
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    cursor?: DebtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * User.metas
   */
  export type User$metasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    where?: MetaWhereInput
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    cursor?: MetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * User.verificationCodes
   */
  export type User$verificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    cursor?: VerificationCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * User.salary_history
   */
  export type User$salary_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryInclude<ExtArgs> | null
    where?: SalaryHistoryWhereInput
    orderBy?: SalaryHistoryOrderByWithRelationInput | SalaryHistoryOrderByWithRelationInput[]
    cursor?: SalaryHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaryHistoryScalarFieldEnum | SalaryHistoryScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    os: string | null
    browser: string | null
    isMobile: boolean | null
    userAgent: string | null
    brand: string | null
    model: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    os: string | null
    browser: string | null
    isMobile: boolean | null
    userAgent: string | null
    brand: string | null
    model: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    user_id: number
    os: number
    browser: number
    isMobile: number
    userAgent: number
    brand: number
    model: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    user_id?: true
    os?: true
    browser?: true
    isMobile?: true
    userAgent?: true
    brand?: true
    model?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    user_id?: true
    os?: true
    browser?: true
    isMobile?: true
    userAgent?: true
    brand?: true
    model?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    user_id?: true
    os?: true
    browser?: true
    isMobile?: true
    userAgent?: true
    brand?: true
    model?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    user_id: number
    os: string | null
    browser: string | null
    isMobile: boolean
    userAgent: string | null
    brand: string | null
    model: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    os?: boolean
    browser?: boolean
    isMobile?: boolean
    userAgent?: boolean
    brand?: boolean
    model?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    notificationPreferences?: boolean | Device$notificationPreferencesArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    os?: boolean
    browser?: boolean
    isMobile?: boolean
    userAgent?: boolean
    brand?: boolean
    model?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    os?: boolean
    browser?: boolean
    isMobile?: boolean
    userAgent?: boolean
    brand?: boolean
    model?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    user_id?: boolean
    os?: boolean
    browser?: boolean
    isMobile?: boolean
    userAgent?: boolean
    brand?: boolean
    model?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "os" | "browser" | "isMobile" | "userAgent" | "brand" | "model" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    notificationPreferences?: boolean | Device$notificationPreferencesArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      notificationPreferences: Prisma.$NotificationPreferencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      os: string | null
      browser: string | null
      isMobile: boolean
      userAgent: string | null
      brand: string | null
      model: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notificationPreferences<T extends Device$notificationPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, Device$notificationPreferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'Int'>
    readonly user_id: FieldRef<"Device", 'Int'>
    readonly os: FieldRef<"Device", 'String'>
    readonly browser: FieldRef<"Device", 'String'>
    readonly isMobile: FieldRef<"Device", 'Boolean'>
    readonly userAgent: FieldRef<"Device", 'String'>
    readonly brand: FieldRef<"Device", 'String'>
    readonly model: FieldRef<"Device", 'String'>
    readonly status: FieldRef<"Device", 'String'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.notificationPreferences
   */
  export type Device$notificationPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceInclude<ExtArgs> | null
    where?: NotificationPreferenceWhereInput
    orderBy?: NotificationPreferenceOrderByWithRelationInput | NotificationPreferenceOrderByWithRelationInput[]
    cursor?: NotificationPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationPreferenceScalarFieldEnum | NotificationPreferenceScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model NotificationPreference
   */

  export type AggregateNotificationPreference = {
    _count: NotificationPreferenceCountAggregateOutputType | null
    _avg: NotificationPreferenceAvgAggregateOutputType | null
    _sum: NotificationPreferenceSumAggregateOutputType | null
    _min: NotificationPreferenceMinAggregateOutputType | null
    _max: NotificationPreferenceMaxAggregateOutputType | null
  }

  export type NotificationPreferenceAvgAggregateOutputType = {
    id: number | null
    device_id: number | null
  }

  export type NotificationPreferenceSumAggregateOutputType = {
    id: number | null
    device_id: number | null
  }

  export type NotificationPreferenceMinAggregateOutputType = {
    id: number | null
    device_id: number | null
    pushEnabled: boolean | null
    subscription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationPreferenceMaxAggregateOutputType = {
    id: number | null
    device_id: number | null
    pushEnabled: boolean | null
    subscription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationPreferenceCountAggregateOutputType = {
    id: number
    device_id: number
    pushEnabled: number
    subscription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationPreferenceAvgAggregateInputType = {
    id?: true
    device_id?: true
  }

  export type NotificationPreferenceSumAggregateInputType = {
    id?: true
    device_id?: true
  }

  export type NotificationPreferenceMinAggregateInputType = {
    id?: true
    device_id?: true
    pushEnabled?: true
    subscription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationPreferenceMaxAggregateInputType = {
    id?: true
    device_id?: true
    pushEnabled?: true
    subscription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationPreferenceCountAggregateInputType = {
    id?: true
    device_id?: true
    pushEnabled?: true
    subscription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationPreference to aggregate.
     */
    where?: NotificationPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     */
    orderBy?: NotificationPreferenceOrderByWithRelationInput | NotificationPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationPreferences
    **/
    _count?: true | NotificationPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationPreferenceMaxAggregateInputType
  }

  export type GetNotificationPreferenceAggregateType<T extends NotificationPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationPreference[P]>
      : GetScalarType<T[P], AggregateNotificationPreference[P]>
  }




  export type NotificationPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationPreferenceWhereInput
    orderBy?: NotificationPreferenceOrderByWithAggregationInput | NotificationPreferenceOrderByWithAggregationInput[]
    by: NotificationPreferenceScalarFieldEnum[] | NotificationPreferenceScalarFieldEnum
    having?: NotificationPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationPreferenceCountAggregateInputType | true
    _avg?: NotificationPreferenceAvgAggregateInputType
    _sum?: NotificationPreferenceSumAggregateInputType
    _min?: NotificationPreferenceMinAggregateInputType
    _max?: NotificationPreferenceMaxAggregateInputType
  }

  export type NotificationPreferenceGroupByOutputType = {
    id: number
    device_id: number | null
    pushEnabled: boolean
    subscription: string | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationPreferenceCountAggregateOutputType | null
    _avg: NotificationPreferenceAvgAggregateOutputType | null
    _sum: NotificationPreferenceSumAggregateOutputType | null
    _min: NotificationPreferenceMinAggregateOutputType | null
    _max: NotificationPreferenceMaxAggregateOutputType | null
  }

  type GetNotificationPreferenceGroupByPayload<T extends NotificationPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type NotificationPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    pushEnabled?: boolean
    subscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | NotificationPreference$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["notificationPreference"]>

  export type NotificationPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    pushEnabled?: boolean
    subscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | NotificationPreference$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["notificationPreference"]>

  export type NotificationPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    pushEnabled?: boolean
    subscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | NotificationPreference$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["notificationPreference"]>

  export type NotificationPreferenceSelectScalar = {
    id?: boolean
    device_id?: boolean
    pushEnabled?: boolean
    subscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "device_id" | "pushEnabled" | "subscription" | "createdAt" | "updatedAt", ExtArgs["result"]["notificationPreference"]>
  export type NotificationPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | NotificationPreference$deviceArgs<ExtArgs>
  }
  export type NotificationPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | NotificationPreference$deviceArgs<ExtArgs>
  }
  export type NotificationPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | NotificationPreference$deviceArgs<ExtArgs>
  }

  export type $NotificationPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationPreference"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      device_id: number | null
      pushEnabled: boolean
      subscription: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificationPreference"]>
    composites: {}
  }

  type NotificationPreferenceGetPayload<S extends boolean | null | undefined | NotificationPreferenceDefaultArgs> = $Result.GetResult<Prisma.$NotificationPreferencePayload, S>

  type NotificationPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationPreferenceCountAggregateInputType | true
    }

  export interface NotificationPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationPreference'], meta: { name: 'NotificationPreference' } }
    /**
     * Find zero or one NotificationPreference that matches the filter.
     * @param {NotificationPreferenceFindUniqueArgs} args - Arguments to find a NotificationPreference
     * @example
     * // Get one NotificationPreference
     * const notificationPreference = await prisma.notificationPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationPreferenceFindUniqueArgs>(args: SelectSubset<T, NotificationPreferenceFindUniqueArgs<ExtArgs>>): Prisma__NotificationPreferenceClient<$Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationPreferenceFindUniqueOrThrowArgs} args - Arguments to find a NotificationPreference
     * @example
     * // Get one NotificationPreference
     * const notificationPreference = await prisma.notificationPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationPreferenceClient<$Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceFindFirstArgs} args - Arguments to find a NotificationPreference
     * @example
     * // Get one NotificationPreference
     * const notificationPreference = await prisma.notificationPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationPreferenceFindFirstArgs>(args?: SelectSubset<T, NotificationPreferenceFindFirstArgs<ExtArgs>>): Prisma__NotificationPreferenceClient<$Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceFindFirstOrThrowArgs} args - Arguments to find a NotificationPreference
     * @example
     * // Get one NotificationPreference
     * const notificationPreference = await prisma.notificationPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationPreferenceClient<$Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreference.findMany()
     * 
     * // Get first 10 NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationPreferenceWithIdOnly = await prisma.notificationPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationPreferenceFindManyArgs>(args?: SelectSubset<T, NotificationPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationPreference.
     * @param {NotificationPreferenceCreateArgs} args - Arguments to create a NotificationPreference.
     * @example
     * // Create one NotificationPreference
     * const NotificationPreference = await prisma.notificationPreference.create({
     *   data: {
     *     // ... data to create a NotificationPreference
     *   }
     * })
     * 
     */
    create<T extends NotificationPreferenceCreateArgs>(args: SelectSubset<T, NotificationPreferenceCreateArgs<ExtArgs>>): Prisma__NotificationPreferenceClient<$Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationPreferences.
     * @param {NotificationPreferenceCreateManyArgs} args - Arguments to create many NotificationPreferences.
     * @example
     * // Create many NotificationPreferences
     * const notificationPreference = await prisma.notificationPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationPreferenceCreateManyArgs>(args?: SelectSubset<T, NotificationPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationPreferences and returns the data saved in the database.
     * @param {NotificationPreferenceCreateManyAndReturnArgs} args - Arguments to create many NotificationPreferences.
     * @example
     * // Create many NotificationPreferences
     * const notificationPreference = await prisma.notificationPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationPreferences and only return the `id`
     * const notificationPreferenceWithIdOnly = await prisma.notificationPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationPreference.
     * @param {NotificationPreferenceDeleteArgs} args - Arguments to delete one NotificationPreference.
     * @example
     * // Delete one NotificationPreference
     * const NotificationPreference = await prisma.notificationPreference.delete({
     *   where: {
     *     // ... filter to delete one NotificationPreference
     *   }
     * })
     * 
     */
    delete<T extends NotificationPreferenceDeleteArgs>(args: SelectSubset<T, NotificationPreferenceDeleteArgs<ExtArgs>>): Prisma__NotificationPreferenceClient<$Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationPreference.
     * @param {NotificationPreferenceUpdateArgs} args - Arguments to update one NotificationPreference.
     * @example
     * // Update one NotificationPreference
     * const notificationPreference = await prisma.notificationPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationPreferenceUpdateArgs>(args: SelectSubset<T, NotificationPreferenceUpdateArgs<ExtArgs>>): Prisma__NotificationPreferenceClient<$Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationPreferences.
     * @param {NotificationPreferenceDeleteManyArgs} args - Arguments to filter NotificationPreferences to delete.
     * @example
     * // Delete a few NotificationPreferences
     * const { count } = await prisma.notificationPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationPreferenceDeleteManyArgs>(args?: SelectSubset<T, NotificationPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationPreferences
     * const notificationPreference = await prisma.notificationPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationPreferenceUpdateManyArgs>(args: SelectSubset<T, NotificationPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationPreferences and returns the data updated in the database.
     * @param {NotificationPreferenceUpdateManyAndReturnArgs} args - Arguments to update many NotificationPreferences.
     * @example
     * // Update many NotificationPreferences
     * const notificationPreference = await prisma.notificationPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationPreferences and only return the `id`
     * const notificationPreferenceWithIdOnly = await prisma.notificationPreference.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationPreference.
     * @param {NotificationPreferenceUpsertArgs} args - Arguments to update or create a NotificationPreference.
     * @example
     * // Update or create a NotificationPreference
     * const notificationPreference = await prisma.notificationPreference.upsert({
     *   create: {
     *     // ... data to create a NotificationPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationPreference we want to update
     *   }
     * })
     */
    upsert<T extends NotificationPreferenceUpsertArgs>(args: SelectSubset<T, NotificationPreferenceUpsertArgs<ExtArgs>>): Prisma__NotificationPreferenceClient<$Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceCountArgs} args - Arguments to filter NotificationPreferences to count.
     * @example
     * // Count the number of NotificationPreferences
     * const count = await prisma.notificationPreference.count({
     *   where: {
     *     // ... the filter for the NotificationPreferences we want to count
     *   }
     * })
    **/
    count<T extends NotificationPreferenceCountArgs>(
      args?: Subset<T, NotificationPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationPreferenceAggregateArgs>(args: Subset<T, NotificationPreferenceAggregateArgs>): Prisma.PrismaPromise<GetNotificationPreferenceAggregateType<T>>

    /**
     * Group by NotificationPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferenceGroupByArgs} args - Group by arguments.
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
      T extends NotificationPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: NotificationPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationPreference model
   */
  readonly fields: NotificationPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends NotificationPreference$deviceArgs<ExtArgs> = {}>(args?: Subset<T, NotificationPreference$deviceArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NotificationPreference model
   */
  interface NotificationPreferenceFieldRefs {
    readonly id: FieldRef<"NotificationPreference", 'Int'>
    readonly device_id: FieldRef<"NotificationPreference", 'Int'>
    readonly pushEnabled: FieldRef<"NotificationPreference", 'Boolean'>
    readonly subscription: FieldRef<"NotificationPreference", 'String'>
    readonly createdAt: FieldRef<"NotificationPreference", 'DateTime'>
    readonly updatedAt: FieldRef<"NotificationPreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationPreference findUnique
   */
  export type NotificationPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which NotificationPreference to fetch.
     */
    where: NotificationPreferenceWhereUniqueInput
  }

  /**
   * NotificationPreference findUniqueOrThrow
   */
  export type NotificationPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which NotificationPreference to fetch.
     */
    where: NotificationPreferenceWhereUniqueInput
  }

  /**
   * NotificationPreference findFirst
   */
  export type NotificationPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which NotificationPreference to fetch.
     */
    where?: NotificationPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     */
    orderBy?: NotificationPreferenceOrderByWithRelationInput | NotificationPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationPreferences.
     */
    cursor?: NotificationPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationPreferences.
     */
    distinct?: NotificationPreferenceScalarFieldEnum | NotificationPreferenceScalarFieldEnum[]
  }

  /**
   * NotificationPreference findFirstOrThrow
   */
  export type NotificationPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which NotificationPreference to fetch.
     */
    where?: NotificationPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     */
    orderBy?: NotificationPreferenceOrderByWithRelationInput | NotificationPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationPreferences.
     */
    cursor?: NotificationPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationPreferences.
     */
    distinct?: NotificationPreferenceScalarFieldEnum | NotificationPreferenceScalarFieldEnum[]
  }

  /**
   * NotificationPreference findMany
   */
  export type NotificationPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which NotificationPreferences to fetch.
     */
    where?: NotificationPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     */
    orderBy?: NotificationPreferenceOrderByWithRelationInput | NotificationPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationPreferences.
     */
    cursor?: NotificationPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     */
    skip?: number
    distinct?: NotificationPreferenceScalarFieldEnum | NotificationPreferenceScalarFieldEnum[]
  }

  /**
   * NotificationPreference create
   */
  export type NotificationPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationPreference.
     */
    data: XOR<NotificationPreferenceCreateInput, NotificationPreferenceUncheckedCreateInput>
  }

  /**
   * NotificationPreference createMany
   */
  export type NotificationPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationPreferences.
     */
    data: NotificationPreferenceCreateManyInput | NotificationPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationPreference createManyAndReturn
   */
  export type NotificationPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationPreferences.
     */
    data: NotificationPreferenceCreateManyInput | NotificationPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationPreference update
   */
  export type NotificationPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationPreference.
     */
    data: XOR<NotificationPreferenceUpdateInput, NotificationPreferenceUncheckedUpdateInput>
    /**
     * Choose, which NotificationPreference to update.
     */
    where: NotificationPreferenceWhereUniqueInput
  }

  /**
   * NotificationPreference updateMany
   */
  export type NotificationPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationPreferences.
     */
    data: XOR<NotificationPreferenceUpdateManyMutationInput, NotificationPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which NotificationPreferences to update
     */
    where?: NotificationPreferenceWhereInput
    /**
     * Limit how many NotificationPreferences to update.
     */
    limit?: number
  }

  /**
   * NotificationPreference updateManyAndReturn
   */
  export type NotificationPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update NotificationPreferences.
     */
    data: XOR<NotificationPreferenceUpdateManyMutationInput, NotificationPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which NotificationPreferences to update
     */
    where?: NotificationPreferenceWhereInput
    /**
     * Limit how many NotificationPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationPreference upsert
   */
  export type NotificationPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationPreference to update in case it exists.
     */
    where: NotificationPreferenceWhereUniqueInput
    /**
     * In case the NotificationPreference found by the `where` argument doesn't exist, create a new NotificationPreference with this data.
     */
    create: XOR<NotificationPreferenceCreateInput, NotificationPreferenceUncheckedCreateInput>
    /**
     * In case the NotificationPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationPreferenceUpdateInput, NotificationPreferenceUncheckedUpdateInput>
  }

  /**
   * NotificationPreference delete
   */
  export type NotificationPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceInclude<ExtArgs> | null
    /**
     * Filter which NotificationPreference to delete.
     */
    where: NotificationPreferenceWhereUniqueInput
  }

  /**
   * NotificationPreference deleteMany
   */
  export type NotificationPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationPreferences to delete
     */
    where?: NotificationPreferenceWhereInput
    /**
     * Limit how many NotificationPreferences to delete.
     */
    limit?: number
  }

  /**
   * NotificationPreference.device
   */
  export type NotificationPreference$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
  }

  /**
   * NotificationPreference without action
   */
  export type NotificationPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreference
     */
    select?: NotificationPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreference
     */
    omit?: NotificationPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationPreferenceInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    debt_id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    debt_id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    message: string | null
    isRead: boolean | null
    debt_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    message: string | null
    isRead: boolean | null
    debt_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    message: number
    isRead: number
    debt_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    user_id?: true
    debt_id?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    user_id?: true
    debt_id?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    message?: true
    isRead?: true
    debt_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    message?: true
    isRead?: true
    debt_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    message?: true
    isRead?: true
    debt_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    user_id: number
    title: string
    message: string
    isRead: boolean
    debt_id: number | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    debt_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    debt?: boolean | Notification$debtArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    debt_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    debt?: boolean | Notification$debtArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    debt_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    debt?: boolean | Notification$debtArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    debt_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "message" | "isRead" | "debt_id" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    debt?: boolean | Notification$debtArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    debt?: boolean | Notification$debtArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    debt?: boolean | Notification$debtArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      debt: Prisma.$DebtPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string
      message: string
      isRead: boolean
      debt_id: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    debt<T extends Notification$debtArgs<ExtArgs> = {}>(args?: Subset<T, Notification$debtArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly user_id: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly debt_id: FieldRef<"Notification", 'Int'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.debt
   */
  export type Notification$debtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    where?: DebtWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model VerificationCode
   */

  export type AggregateVerificationCode = {
    _count: VerificationCodeCountAggregateOutputType | null
    _avg: VerificationCodeAvgAggregateOutputType | null
    _sum: VerificationCodeSumAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  export type VerificationCodeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VerificationCodeSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VerificationCodeMinAggregateOutputType = {
    id: number | null
    code: string | null
    userId: number | null
    createdAt: Date | null
    expiresAt: Date | null
    isUsed: boolean | null
  }

  export type VerificationCodeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    userId: number | null
    createdAt: Date | null
    expiresAt: Date | null
    isUsed: boolean | null
  }

  export type VerificationCodeCountAggregateOutputType = {
    id: number
    code: number
    userId: number
    createdAt: number
    expiresAt: number
    isUsed: number
    _all: number
  }


  export type VerificationCodeAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VerificationCodeSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VerificationCodeMinAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    isUsed?: true
  }

  export type VerificationCodeMaxAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    isUsed?: true
  }

  export type VerificationCodeCountAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    isUsed?: true
    _all?: true
  }

  export type VerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCode to aggregate.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type GetVerificationCodeAggregateType<T extends VerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCode[P]>
      : GetScalarType<T[P], AggregateVerificationCode[P]>
  }




  export type VerificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithAggregationInput | VerificationCodeOrderByWithAggregationInput[]
    by: VerificationCodeScalarFieldEnum[] | VerificationCodeScalarFieldEnum
    having?: VerificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodeCountAggregateInputType | true
    _avg?: VerificationCodeAvgAggregateInputType
    _sum?: VerificationCodeSumAggregateInputType
    _min?: VerificationCodeMinAggregateInputType
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type VerificationCodeGroupByOutputType = {
    id: number
    code: string
    userId: number
    createdAt: Date
    expiresAt: Date
    isUsed: boolean
    _count: VerificationCodeCountAggregateOutputType | null
    _avg: VerificationCodeAvgAggregateOutputType | null
    _sum: VerificationCodeSumAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  type GetVerificationCodeGroupByPayload<T extends VerificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectScalar = {
    id?: boolean
    code?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isUsed?: boolean
  }

  export type VerificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "userId" | "createdAt" | "expiresAt" | "isUsed", ExtArgs["result"]["verificationCode"]>
  export type VerificationCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      userId: number
      createdAt: Date
      expiresAt: Date
      isUsed: boolean
    }, ExtArgs["result"]["verificationCode"]>
    composites: {}
  }

  type VerificationCodeGetPayload<S extends boolean | null | undefined | VerificationCodeDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodePayload, S>

  type VerificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodeCountAggregateInputType | true
    }

  export interface VerificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCode'], meta: { name: 'VerificationCode' } }
    /**
     * Find zero or one VerificationCode that matches the filter.
     * @param {VerificationCodeFindUniqueArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodeFindUniqueArgs>(args: SelectSubset<T, VerificationCodeFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodeFindUniqueOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodeFindFirstArgs>(args?: SelectSubset<T, VerificationCodeFindFirstArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationCodeFindManyArgs>(args?: SelectSubset<T, VerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationCode.
     * @param {VerificationCodeCreateArgs} args - Arguments to create a VerificationCode.
     * @example
     * // Create one VerificationCode
     * const VerificationCode = await prisma.verificationCode.create({
     *   data: {
     *     // ... data to create a VerificationCode
     *   }
     * })
     * 
     */
    create<T extends VerificationCodeCreateArgs>(args: SelectSubset<T, VerificationCodeCreateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodeCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodeCreateManyArgs>(args?: SelectSubset<T, VerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationCodes and returns the data saved in the database.
     * @param {VerificationCodeCreateManyAndReturnArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationCode.
     * @param {VerificationCodeDeleteArgs} args - Arguments to delete one VerificationCode.
     * @example
     * // Delete one VerificationCode
     * const VerificationCode = await prisma.verificationCode.delete({
     *   where: {
     *     // ... filter to delete one VerificationCode
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodeDeleteArgs>(args: SelectSubset<T, VerificationCodeDeleteArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationCode.
     * @param {VerificationCodeUpdateArgs} args - Arguments to update one VerificationCode.
     * @example
     * // Update one VerificationCode
     * const verificationCode = await prisma.verificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodeUpdateArgs>(args: SelectSubset<T, VerificationCodeUpdateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodeDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodeDeleteManyArgs>(args?: SelectSubset<T, VerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodeUpdateManyArgs>(args: SelectSubset<T, VerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes and returns the data updated in the database.
     * @param {VerificationCodeUpdateManyAndReturnArgs} args - Arguments to update many VerificationCodes.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationCode.
     * @param {VerificationCodeUpsertArgs} args - Arguments to update or create a VerificationCode.
     * @example
     * // Update or create a VerificationCode
     * const verificationCode = await prisma.verificationCode.upsert({
     *   create: {
     *     // ... data to create a VerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodeUpsertArgs>(args: SelectSubset<T, VerificationCodeUpsertArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCode.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodeCountArgs>(
      args?: Subset<T, VerificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationCodeAggregateArgs>(args: Subset<T, VerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodeAggregateType<T>>

    /**
     * Group by VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeGroupByArgs} args - Group by arguments.
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
      T extends VerificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCode model
   */
  readonly fields: VerificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VerificationCode model
   */
  interface VerificationCodeFieldRefs {
    readonly id: FieldRef<"VerificationCode", 'Int'>
    readonly code: FieldRef<"VerificationCode", 'String'>
    readonly userId: FieldRef<"VerificationCode", 'Int'>
    readonly createdAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly expiresAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly isUsed: FieldRef<"VerificationCode", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCode findUnique
   */
  export type VerificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findUniqueOrThrow
   */
  export type VerificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findFirst
   */
  export type VerificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findFirstOrThrow
   */
  export type VerificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findMany
   */
  export type VerificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode create
   */
  export type VerificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationCode.
     */
    data: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
  }

  /**
   * VerificationCode createMany
   */
  export type VerificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCode createManyAndReturn
   */
  export type VerificationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCode update
   */
  export type VerificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationCode.
     */
    data: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
    /**
     * Choose, which VerificationCode to update.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode updateMany
   */
  export type VerificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCode updateManyAndReturn
   */
  export type VerificationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCode upsert
   */
  export type VerificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationCode to update in case it exists.
     */
    where: VerificationCodeWhereUniqueInput
    /**
     * In case the VerificationCode found by the `where` argument doesn't exist, create a new VerificationCode with this data.
     */
    create: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
    /**
     * In case the VerificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
  }

  /**
   * VerificationCode delete
   */
  export type VerificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter which VerificationCode to delete.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode deleteMany
   */
  export type VerificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCode without action
   */
  export type VerificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
  }


  /**
   * Model Debt
   */

  export type AggregateDebt = {
    _count: DebtCountAggregateOutputType | null
    _avg: DebtAvgAggregateOutputType | null
    _sum: DebtSumAggregateOutputType | null
    _min: DebtMinAggregateOutputType | null
    _max: DebtMaxAggregateOutputType | null
  }

  export type DebtAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
    interest_rate: Decimal | null
    duration_months: number | null
    daysBeforeNotify: number | null
  }

  export type DebtSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
    interest_rate: Decimal | null
    duration_months: number | null
    daysBeforeNotify: number | null
  }

  export type DebtMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    description: string | null
    amount: Decimal | null
    interest_rate: Decimal | null
    duration_months: number | null
    method: string | null
    start_date: string | null
    end_date: string | null
    status: string | null
    notifyEnabled: boolean | null
    daysBeforeNotify: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebtMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    description: string | null
    amount: Decimal | null
    interest_rate: Decimal | null
    duration_months: number | null
    method: string | null
    start_date: string | null
    end_date: string | null
    status: string | null
    notifyEnabled: boolean | null
    daysBeforeNotify: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebtCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    description: number
    amount: number
    interest_rate: number
    duration_months: number
    method: number
    start_date: number
    end_date: number
    status: number
    notifyEnabled: number
    daysBeforeNotify: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DebtAvgAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    interest_rate?: true
    duration_months?: true
    daysBeforeNotify?: true
  }

  export type DebtSumAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    interest_rate?: true
    duration_months?: true
    daysBeforeNotify?: true
  }

  export type DebtMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    amount?: true
    interest_rate?: true
    duration_months?: true
    method?: true
    start_date?: true
    end_date?: true
    status?: true
    notifyEnabled?: true
    daysBeforeNotify?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebtMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    amount?: true
    interest_rate?: true
    duration_months?: true
    method?: true
    start_date?: true
    end_date?: true
    status?: true
    notifyEnabled?: true
    daysBeforeNotify?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebtCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    amount?: true
    interest_rate?: true
    duration_months?: true
    method?: true
    start_date?: true
    end_date?: true
    status?: true
    notifyEnabled?: true
    daysBeforeNotify?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DebtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Debt to aggregate.
     */
    where?: DebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debts to fetch.
     */
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Debts
    **/
    _count?: true | DebtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DebtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DebtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebtMaxAggregateInputType
  }

  export type GetDebtAggregateType<T extends DebtAggregateArgs> = {
        [P in keyof T & keyof AggregateDebt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebt[P]>
      : GetScalarType<T[P], AggregateDebt[P]>
  }




  export type DebtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtWhereInput
    orderBy?: DebtOrderByWithAggregationInput | DebtOrderByWithAggregationInput[]
    by: DebtScalarFieldEnum[] | DebtScalarFieldEnum
    having?: DebtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebtCountAggregateInputType | true
    _avg?: DebtAvgAggregateInputType
    _sum?: DebtSumAggregateInputType
    _min?: DebtMinAggregateInputType
    _max?: DebtMaxAggregateInputType
  }

  export type DebtGroupByOutputType = {
    id: number
    user_id: number
    name: string | null
    description: string | null
    amount: Decimal | null
    interest_rate: Decimal | null
    duration_months: number | null
    method: string | null
    start_date: string | null
    end_date: string | null
    status: string | null
    notifyEnabled: boolean | null
    daysBeforeNotify: number | null
    createdAt: Date
    updatedAt: Date
    _count: DebtCountAggregateOutputType | null
    _avg: DebtAvgAggregateOutputType | null
    _sum: DebtSumAggregateOutputType | null
    _min: DebtMinAggregateOutputType | null
    _max: DebtMaxAggregateOutputType | null
  }

  type GetDebtGroupByPayload<T extends DebtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebtGroupByOutputType[P]>
            : GetScalarType<T[P], DebtGroupByOutputType[P]>
        }
      >
    >


  export type DebtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    interest_rate?: boolean
    duration_months?: boolean
    method?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    notifyEnabled?: boolean
    daysBeforeNotify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    amortizations?: boolean | Debt$amortizationsArgs<ExtArgs>
    notifications?: boolean | Debt$notificationsArgs<ExtArgs>
    _count?: boolean | DebtCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debt"]>

  export type DebtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    interest_rate?: boolean
    duration_months?: boolean
    method?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    notifyEnabled?: boolean
    daysBeforeNotify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debt"]>

  export type DebtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    interest_rate?: boolean
    duration_months?: boolean
    method?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    notifyEnabled?: boolean
    daysBeforeNotify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debt"]>

  export type DebtSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    interest_rate?: boolean
    duration_months?: boolean
    method?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    notifyEnabled?: boolean
    daysBeforeNotify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DebtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "description" | "amount" | "interest_rate" | "duration_months" | "method" | "start_date" | "end_date" | "status" | "notifyEnabled" | "daysBeforeNotify" | "createdAt" | "updatedAt", ExtArgs["result"]["debt"]>
  export type DebtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    amortizations?: boolean | Debt$amortizationsArgs<ExtArgs>
    notifications?: boolean | Debt$notificationsArgs<ExtArgs>
    _count?: boolean | DebtCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DebtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DebtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DebtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Debt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      amortizations: Prisma.$AmortizationPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string | null
      description: string | null
      amount: Prisma.Decimal | null
      interest_rate: Prisma.Decimal | null
      duration_months: number | null
      method: string | null
      start_date: string | null
      end_date: string | null
      status: string | null
      notifyEnabled: boolean | null
      daysBeforeNotify: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["debt"]>
    composites: {}
  }

  type DebtGetPayload<S extends boolean | null | undefined | DebtDefaultArgs> = $Result.GetResult<Prisma.$DebtPayload, S>

  type DebtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DebtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DebtCountAggregateInputType | true
    }

  export interface DebtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Debt'], meta: { name: 'Debt' } }
    /**
     * Find zero or one Debt that matches the filter.
     * @param {DebtFindUniqueArgs} args - Arguments to find a Debt
     * @example
     * // Get one Debt
     * const debt = await prisma.debt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DebtFindUniqueArgs>(args: SelectSubset<T, DebtFindUniqueArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Debt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DebtFindUniqueOrThrowArgs} args - Arguments to find a Debt
     * @example
     * // Get one Debt
     * const debt = await prisma.debt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DebtFindUniqueOrThrowArgs>(args: SelectSubset<T, DebtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Debt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtFindFirstArgs} args - Arguments to find a Debt
     * @example
     * // Get one Debt
     * const debt = await prisma.debt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DebtFindFirstArgs>(args?: SelectSubset<T, DebtFindFirstArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Debt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtFindFirstOrThrowArgs} args - Arguments to find a Debt
     * @example
     * // Get one Debt
     * const debt = await prisma.debt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DebtFindFirstOrThrowArgs>(args?: SelectSubset<T, DebtFindFirstOrThrowArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Debts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Debts
     * const debts = await prisma.debt.findMany()
     * 
     * // Get first 10 Debts
     * const debts = await prisma.debt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debtWithIdOnly = await prisma.debt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DebtFindManyArgs>(args?: SelectSubset<T, DebtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Debt.
     * @param {DebtCreateArgs} args - Arguments to create a Debt.
     * @example
     * // Create one Debt
     * const Debt = await prisma.debt.create({
     *   data: {
     *     // ... data to create a Debt
     *   }
     * })
     * 
     */
    create<T extends DebtCreateArgs>(args: SelectSubset<T, DebtCreateArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Debts.
     * @param {DebtCreateManyArgs} args - Arguments to create many Debts.
     * @example
     * // Create many Debts
     * const debt = await prisma.debt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DebtCreateManyArgs>(args?: SelectSubset<T, DebtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Debts and returns the data saved in the database.
     * @param {DebtCreateManyAndReturnArgs} args - Arguments to create many Debts.
     * @example
     * // Create many Debts
     * const debt = await prisma.debt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Debts and only return the `id`
     * const debtWithIdOnly = await prisma.debt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DebtCreateManyAndReturnArgs>(args?: SelectSubset<T, DebtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Debt.
     * @param {DebtDeleteArgs} args - Arguments to delete one Debt.
     * @example
     * // Delete one Debt
     * const Debt = await prisma.debt.delete({
     *   where: {
     *     // ... filter to delete one Debt
     *   }
     * })
     * 
     */
    delete<T extends DebtDeleteArgs>(args: SelectSubset<T, DebtDeleteArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Debt.
     * @param {DebtUpdateArgs} args - Arguments to update one Debt.
     * @example
     * // Update one Debt
     * const debt = await prisma.debt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DebtUpdateArgs>(args: SelectSubset<T, DebtUpdateArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Debts.
     * @param {DebtDeleteManyArgs} args - Arguments to filter Debts to delete.
     * @example
     * // Delete a few Debts
     * const { count } = await prisma.debt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DebtDeleteManyArgs>(args?: SelectSubset<T, DebtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Debts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Debts
     * const debt = await prisma.debt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DebtUpdateManyArgs>(args: SelectSubset<T, DebtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Debts and returns the data updated in the database.
     * @param {DebtUpdateManyAndReturnArgs} args - Arguments to update many Debts.
     * @example
     * // Update many Debts
     * const debt = await prisma.debt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Debts and only return the `id`
     * const debtWithIdOnly = await prisma.debt.updateManyAndReturn({
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
    updateManyAndReturn<T extends DebtUpdateManyAndReturnArgs>(args: SelectSubset<T, DebtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Debt.
     * @param {DebtUpsertArgs} args - Arguments to update or create a Debt.
     * @example
     * // Update or create a Debt
     * const debt = await prisma.debt.upsert({
     *   create: {
     *     // ... data to create a Debt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Debt we want to update
     *   }
     * })
     */
    upsert<T extends DebtUpsertArgs>(args: SelectSubset<T, DebtUpsertArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Debts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtCountArgs} args - Arguments to filter Debts to count.
     * @example
     * // Count the number of Debts
     * const count = await prisma.debt.count({
     *   where: {
     *     // ... the filter for the Debts we want to count
     *   }
     * })
    **/
    count<T extends DebtCountArgs>(
      args?: Subset<T, DebtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Debt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DebtAggregateArgs>(args: Subset<T, DebtAggregateArgs>): Prisma.PrismaPromise<GetDebtAggregateType<T>>

    /**
     * Group by Debt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtGroupByArgs} args - Group by arguments.
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
      T extends DebtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebtGroupByArgs['orderBy'] }
        : { orderBy?: DebtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DebtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Debt model
   */
  readonly fields: DebtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Debt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    amortizations<T extends Debt$amortizationsArgs<ExtArgs> = {}>(args?: Subset<T, Debt$amortizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmortizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Debt$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Debt$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Debt model
   */
  interface DebtFieldRefs {
    readonly id: FieldRef<"Debt", 'Int'>
    readonly user_id: FieldRef<"Debt", 'Int'>
    readonly name: FieldRef<"Debt", 'String'>
    readonly description: FieldRef<"Debt", 'String'>
    readonly amount: FieldRef<"Debt", 'Decimal'>
    readonly interest_rate: FieldRef<"Debt", 'Decimal'>
    readonly duration_months: FieldRef<"Debt", 'Int'>
    readonly method: FieldRef<"Debt", 'String'>
    readonly start_date: FieldRef<"Debt", 'String'>
    readonly end_date: FieldRef<"Debt", 'String'>
    readonly status: FieldRef<"Debt", 'String'>
    readonly notifyEnabled: FieldRef<"Debt", 'Boolean'>
    readonly daysBeforeNotify: FieldRef<"Debt", 'Int'>
    readonly createdAt: FieldRef<"Debt", 'DateTime'>
    readonly updatedAt: FieldRef<"Debt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Debt findUnique
   */
  export type DebtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debt to fetch.
     */
    where: DebtWhereUniqueInput
  }

  /**
   * Debt findUniqueOrThrow
   */
  export type DebtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debt to fetch.
     */
    where: DebtWhereUniqueInput
  }

  /**
   * Debt findFirst
   */
  export type DebtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debt to fetch.
     */
    where?: DebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debts to fetch.
     */
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Debts.
     */
    cursor?: DebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Debts.
     */
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * Debt findFirstOrThrow
   */
  export type DebtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debt to fetch.
     */
    where?: DebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debts to fetch.
     */
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Debts.
     */
    cursor?: DebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Debts.
     */
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * Debt findMany
   */
  export type DebtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debts to fetch.
     */
    where?: DebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debts to fetch.
     */
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Debts.
     */
    cursor?: DebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debts.
     */
    skip?: number
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * Debt create
   */
  export type DebtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * The data needed to create a Debt.
     */
    data: XOR<DebtCreateInput, DebtUncheckedCreateInput>
  }

  /**
   * Debt createMany
   */
  export type DebtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Debts.
     */
    data: DebtCreateManyInput | DebtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Debt createManyAndReturn
   */
  export type DebtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * The data used to create many Debts.
     */
    data: DebtCreateManyInput | DebtCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Debt update
   */
  export type DebtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * The data needed to update a Debt.
     */
    data: XOR<DebtUpdateInput, DebtUncheckedUpdateInput>
    /**
     * Choose, which Debt to update.
     */
    where: DebtWhereUniqueInput
  }

  /**
   * Debt updateMany
   */
  export type DebtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Debts.
     */
    data: XOR<DebtUpdateManyMutationInput, DebtUncheckedUpdateManyInput>
    /**
     * Filter which Debts to update
     */
    where?: DebtWhereInput
    /**
     * Limit how many Debts to update.
     */
    limit?: number
  }

  /**
   * Debt updateManyAndReturn
   */
  export type DebtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * The data used to update Debts.
     */
    data: XOR<DebtUpdateManyMutationInput, DebtUncheckedUpdateManyInput>
    /**
     * Filter which Debts to update
     */
    where?: DebtWhereInput
    /**
     * Limit how many Debts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Debt upsert
   */
  export type DebtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * The filter to search for the Debt to update in case it exists.
     */
    where: DebtWhereUniqueInput
    /**
     * In case the Debt found by the `where` argument doesn't exist, create a new Debt with this data.
     */
    create: XOR<DebtCreateInput, DebtUncheckedCreateInput>
    /**
     * In case the Debt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebtUpdateInput, DebtUncheckedUpdateInput>
  }

  /**
   * Debt delete
   */
  export type DebtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter which Debt to delete.
     */
    where: DebtWhereUniqueInput
  }

  /**
   * Debt deleteMany
   */
  export type DebtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Debts to delete
     */
    where?: DebtWhereInput
    /**
     * Limit how many Debts to delete.
     */
    limit?: number
  }

  /**
   * Debt.amortizations
   */
  export type Debt$amortizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationInclude<ExtArgs> | null
    where?: AmortizationWhereInput
    orderBy?: AmortizationOrderByWithRelationInput | AmortizationOrderByWithRelationInput[]
    cursor?: AmortizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmortizationScalarFieldEnum | AmortizationScalarFieldEnum[]
  }

  /**
   * Debt.notifications
   */
  export type Debt$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Debt without action
   */
  export type DebtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
  }


  /**
   * Model Amortization
   */

  export type AggregateAmortization = {
    _count: AmortizationCountAggregateOutputType | null
    _avg: AmortizationAvgAggregateOutputType | null
    _sum: AmortizationSumAggregateOutputType | null
    _min: AmortizationMinAggregateOutputType | null
    _max: AmortizationMaxAggregateOutputType | null
  }

  export type AmortizationAvgAggregateOutputType = {
    id: number | null
    debt_id: number | null
    number_months: number | null
    quota: Decimal | null
    interest: Decimal | null
    amortized: Decimal | null
    outstanding: Decimal | null
  }

  export type AmortizationSumAggregateOutputType = {
    id: number | null
    debt_id: number | null
    number_months: number | null
    quota: Decimal | null
    interest: Decimal | null
    amortized: Decimal | null
    outstanding: Decimal | null
  }

  export type AmortizationMinAggregateOutputType = {
    id: number | null
    debt_id: number | null
    number_months: number | null
    date: string | null
    quota: Decimal | null
    interest: Decimal | null
    amortized: Decimal | null
    outstanding: Decimal | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmortizationMaxAggregateOutputType = {
    id: number | null
    debt_id: number | null
    number_months: number | null
    date: string | null
    quota: Decimal | null
    interest: Decimal | null
    amortized: Decimal | null
    outstanding: Decimal | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmortizationCountAggregateOutputType = {
    id: number
    debt_id: number
    number_months: number
    date: number
    quota: number
    interest: number
    amortized: number
    outstanding: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AmortizationAvgAggregateInputType = {
    id?: true
    debt_id?: true
    number_months?: true
    quota?: true
    interest?: true
    amortized?: true
    outstanding?: true
  }

  export type AmortizationSumAggregateInputType = {
    id?: true
    debt_id?: true
    number_months?: true
    quota?: true
    interest?: true
    amortized?: true
    outstanding?: true
  }

  export type AmortizationMinAggregateInputType = {
    id?: true
    debt_id?: true
    number_months?: true
    date?: true
    quota?: true
    interest?: true
    amortized?: true
    outstanding?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmortizationMaxAggregateInputType = {
    id?: true
    debt_id?: true
    number_months?: true
    date?: true
    quota?: true
    interest?: true
    amortized?: true
    outstanding?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmortizationCountAggregateInputType = {
    id?: true
    debt_id?: true
    number_months?: true
    date?: true
    quota?: true
    interest?: true
    amortized?: true
    outstanding?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AmortizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amortization to aggregate.
     */
    where?: AmortizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amortizations to fetch.
     */
    orderBy?: AmortizationOrderByWithRelationInput | AmortizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmortizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amortizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amortizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amortizations
    **/
    _count?: true | AmortizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmortizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmortizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmortizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmortizationMaxAggregateInputType
  }

  export type GetAmortizationAggregateType<T extends AmortizationAggregateArgs> = {
        [P in keyof T & keyof AggregateAmortization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmortization[P]>
      : GetScalarType<T[P], AggregateAmortization[P]>
  }




  export type AmortizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmortizationWhereInput
    orderBy?: AmortizationOrderByWithAggregationInput | AmortizationOrderByWithAggregationInput[]
    by: AmortizationScalarFieldEnum[] | AmortizationScalarFieldEnum
    having?: AmortizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmortizationCountAggregateInputType | true
    _avg?: AmortizationAvgAggregateInputType
    _sum?: AmortizationSumAggregateInputType
    _min?: AmortizationMinAggregateInputType
    _max?: AmortizationMaxAggregateInputType
  }

  export type AmortizationGroupByOutputType = {
    id: number
    debt_id: number
    number_months: number | null
    date: string | null
    quota: Decimal | null
    interest: Decimal | null
    amortized: Decimal | null
    outstanding: Decimal | null
    status: string | null
    createdAt: Date
    updatedAt: Date
    _count: AmortizationCountAggregateOutputType | null
    _avg: AmortizationAvgAggregateOutputType | null
    _sum: AmortizationSumAggregateOutputType | null
    _min: AmortizationMinAggregateOutputType | null
    _max: AmortizationMaxAggregateOutputType | null
  }

  type GetAmortizationGroupByPayload<T extends AmortizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmortizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmortizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmortizationGroupByOutputType[P]>
            : GetScalarType<T[P], AmortizationGroupByOutputType[P]>
        }
      >
    >


  export type AmortizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    debt_id?: boolean
    number_months?: boolean
    date?: boolean
    quota?: boolean
    interest?: boolean
    amortized?: boolean
    outstanding?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    debt?: boolean | DebtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amortization"]>

  export type AmortizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    debt_id?: boolean
    number_months?: boolean
    date?: boolean
    quota?: boolean
    interest?: boolean
    amortized?: boolean
    outstanding?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    debt?: boolean | DebtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amortization"]>

  export type AmortizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    debt_id?: boolean
    number_months?: boolean
    date?: boolean
    quota?: boolean
    interest?: boolean
    amortized?: boolean
    outstanding?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    debt?: boolean | DebtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amortization"]>

  export type AmortizationSelectScalar = {
    id?: boolean
    debt_id?: boolean
    number_months?: boolean
    date?: boolean
    quota?: boolean
    interest?: boolean
    amortized?: boolean
    outstanding?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AmortizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "debt_id" | "number_months" | "date" | "quota" | "interest" | "amortized" | "outstanding" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["amortization"]>
  export type AmortizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debt?: boolean | DebtDefaultArgs<ExtArgs>
  }
  export type AmortizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debt?: boolean | DebtDefaultArgs<ExtArgs>
  }
  export type AmortizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debt?: boolean | DebtDefaultArgs<ExtArgs>
  }

  export type $AmortizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amortization"
    objects: {
      debt: Prisma.$DebtPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      debt_id: number
      number_months: number | null
      date: string | null
      quota: Prisma.Decimal | null
      interest: Prisma.Decimal | null
      amortized: Prisma.Decimal | null
      outstanding: Prisma.Decimal | null
      status: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["amortization"]>
    composites: {}
  }

  type AmortizationGetPayload<S extends boolean | null | undefined | AmortizationDefaultArgs> = $Result.GetResult<Prisma.$AmortizationPayload, S>

  type AmortizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmortizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmortizationCountAggregateInputType | true
    }

  export interface AmortizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amortization'], meta: { name: 'Amortization' } }
    /**
     * Find zero or one Amortization that matches the filter.
     * @param {AmortizationFindUniqueArgs} args - Arguments to find a Amortization
     * @example
     * // Get one Amortization
     * const amortization = await prisma.amortization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmortizationFindUniqueArgs>(args: SelectSubset<T, AmortizationFindUniqueArgs<ExtArgs>>): Prisma__AmortizationClient<$Result.GetResult<Prisma.$AmortizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amortization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmortizationFindUniqueOrThrowArgs} args - Arguments to find a Amortization
     * @example
     * // Get one Amortization
     * const amortization = await prisma.amortization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmortizationFindUniqueOrThrowArgs>(args: SelectSubset<T, AmortizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmortizationClient<$Result.GetResult<Prisma.$AmortizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amortization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmortizationFindFirstArgs} args - Arguments to find a Amortization
     * @example
     * // Get one Amortization
     * const amortization = await prisma.amortization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmortizationFindFirstArgs>(args?: SelectSubset<T, AmortizationFindFirstArgs<ExtArgs>>): Prisma__AmortizationClient<$Result.GetResult<Prisma.$AmortizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amortization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmortizationFindFirstOrThrowArgs} args - Arguments to find a Amortization
     * @example
     * // Get one Amortization
     * const amortization = await prisma.amortization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmortizationFindFirstOrThrowArgs>(args?: SelectSubset<T, AmortizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmortizationClient<$Result.GetResult<Prisma.$AmortizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amortizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmortizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amortizations
     * const amortizations = await prisma.amortization.findMany()
     * 
     * // Get first 10 Amortizations
     * const amortizations = await prisma.amortization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amortizationWithIdOnly = await prisma.amortization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmortizationFindManyArgs>(args?: SelectSubset<T, AmortizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmortizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amortization.
     * @param {AmortizationCreateArgs} args - Arguments to create a Amortization.
     * @example
     * // Create one Amortization
     * const Amortization = await prisma.amortization.create({
     *   data: {
     *     // ... data to create a Amortization
     *   }
     * })
     * 
     */
    create<T extends AmortizationCreateArgs>(args: SelectSubset<T, AmortizationCreateArgs<ExtArgs>>): Prisma__AmortizationClient<$Result.GetResult<Prisma.$AmortizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amortizations.
     * @param {AmortizationCreateManyArgs} args - Arguments to create many Amortizations.
     * @example
     * // Create many Amortizations
     * const amortization = await prisma.amortization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmortizationCreateManyArgs>(args?: SelectSubset<T, AmortizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amortizations and returns the data saved in the database.
     * @param {AmortizationCreateManyAndReturnArgs} args - Arguments to create many Amortizations.
     * @example
     * // Create many Amortizations
     * const amortization = await prisma.amortization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amortizations and only return the `id`
     * const amortizationWithIdOnly = await prisma.amortization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmortizationCreateManyAndReturnArgs>(args?: SelectSubset<T, AmortizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmortizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Amortization.
     * @param {AmortizationDeleteArgs} args - Arguments to delete one Amortization.
     * @example
     * // Delete one Amortization
     * const Amortization = await prisma.amortization.delete({
     *   where: {
     *     // ... filter to delete one Amortization
     *   }
     * })
     * 
     */
    delete<T extends AmortizationDeleteArgs>(args: SelectSubset<T, AmortizationDeleteArgs<ExtArgs>>): Prisma__AmortizationClient<$Result.GetResult<Prisma.$AmortizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amortization.
     * @param {AmortizationUpdateArgs} args - Arguments to update one Amortization.
     * @example
     * // Update one Amortization
     * const amortization = await prisma.amortization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmortizationUpdateArgs>(args: SelectSubset<T, AmortizationUpdateArgs<ExtArgs>>): Prisma__AmortizationClient<$Result.GetResult<Prisma.$AmortizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amortizations.
     * @param {AmortizationDeleteManyArgs} args - Arguments to filter Amortizations to delete.
     * @example
     * // Delete a few Amortizations
     * const { count } = await prisma.amortization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmortizationDeleteManyArgs>(args?: SelectSubset<T, AmortizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amortizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmortizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amortizations
     * const amortization = await prisma.amortization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmortizationUpdateManyArgs>(args: SelectSubset<T, AmortizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amortizations and returns the data updated in the database.
     * @param {AmortizationUpdateManyAndReturnArgs} args - Arguments to update many Amortizations.
     * @example
     * // Update many Amortizations
     * const amortization = await prisma.amortization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Amortizations and only return the `id`
     * const amortizationWithIdOnly = await prisma.amortization.updateManyAndReturn({
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
    updateManyAndReturn<T extends AmortizationUpdateManyAndReturnArgs>(args: SelectSubset<T, AmortizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmortizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Amortization.
     * @param {AmortizationUpsertArgs} args - Arguments to update or create a Amortization.
     * @example
     * // Update or create a Amortization
     * const amortization = await prisma.amortization.upsert({
     *   create: {
     *     // ... data to create a Amortization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amortization we want to update
     *   }
     * })
     */
    upsert<T extends AmortizationUpsertArgs>(args: SelectSubset<T, AmortizationUpsertArgs<ExtArgs>>): Prisma__AmortizationClient<$Result.GetResult<Prisma.$AmortizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amortizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmortizationCountArgs} args - Arguments to filter Amortizations to count.
     * @example
     * // Count the number of Amortizations
     * const count = await prisma.amortization.count({
     *   where: {
     *     // ... the filter for the Amortizations we want to count
     *   }
     * })
    **/
    count<T extends AmortizationCountArgs>(
      args?: Subset<T, AmortizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmortizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amortization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmortizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmortizationAggregateArgs>(args: Subset<T, AmortizationAggregateArgs>): Prisma.PrismaPromise<GetAmortizationAggregateType<T>>

    /**
     * Group by Amortization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmortizationGroupByArgs} args - Group by arguments.
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
      T extends AmortizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmortizationGroupByArgs['orderBy'] }
        : { orderBy?: AmortizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmortizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmortizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amortization model
   */
  readonly fields: AmortizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amortization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmortizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    debt<T extends DebtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DebtDefaultArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Amortization model
   */
  interface AmortizationFieldRefs {
    readonly id: FieldRef<"Amortization", 'Int'>
    readonly debt_id: FieldRef<"Amortization", 'Int'>
    readonly number_months: FieldRef<"Amortization", 'Int'>
    readonly date: FieldRef<"Amortization", 'String'>
    readonly quota: FieldRef<"Amortization", 'Decimal'>
    readonly interest: FieldRef<"Amortization", 'Decimal'>
    readonly amortized: FieldRef<"Amortization", 'Decimal'>
    readonly outstanding: FieldRef<"Amortization", 'Decimal'>
    readonly status: FieldRef<"Amortization", 'String'>
    readonly createdAt: FieldRef<"Amortization", 'DateTime'>
    readonly updatedAt: FieldRef<"Amortization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Amortization findUnique
   */
  export type AmortizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationInclude<ExtArgs> | null
    /**
     * Filter, which Amortization to fetch.
     */
    where: AmortizationWhereUniqueInput
  }

  /**
   * Amortization findUniqueOrThrow
   */
  export type AmortizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationInclude<ExtArgs> | null
    /**
     * Filter, which Amortization to fetch.
     */
    where: AmortizationWhereUniqueInput
  }

  /**
   * Amortization findFirst
   */
  export type AmortizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationInclude<ExtArgs> | null
    /**
     * Filter, which Amortization to fetch.
     */
    where?: AmortizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amortizations to fetch.
     */
    orderBy?: AmortizationOrderByWithRelationInput | AmortizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amortizations.
     */
    cursor?: AmortizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amortizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amortizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amortizations.
     */
    distinct?: AmortizationScalarFieldEnum | AmortizationScalarFieldEnum[]
  }

  /**
   * Amortization findFirstOrThrow
   */
  export type AmortizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationInclude<ExtArgs> | null
    /**
     * Filter, which Amortization to fetch.
     */
    where?: AmortizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amortizations to fetch.
     */
    orderBy?: AmortizationOrderByWithRelationInput | AmortizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amortizations.
     */
    cursor?: AmortizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amortizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amortizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amortizations.
     */
    distinct?: AmortizationScalarFieldEnum | AmortizationScalarFieldEnum[]
  }

  /**
   * Amortization findMany
   */
  export type AmortizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationInclude<ExtArgs> | null
    /**
     * Filter, which Amortizations to fetch.
     */
    where?: AmortizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amortizations to fetch.
     */
    orderBy?: AmortizationOrderByWithRelationInput | AmortizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amortizations.
     */
    cursor?: AmortizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amortizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amortizations.
     */
    skip?: number
    distinct?: AmortizationScalarFieldEnum | AmortizationScalarFieldEnum[]
  }

  /**
   * Amortization create
   */
  export type AmortizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Amortization.
     */
    data: XOR<AmortizationCreateInput, AmortizationUncheckedCreateInput>
  }

  /**
   * Amortization createMany
   */
  export type AmortizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amortizations.
     */
    data: AmortizationCreateManyInput | AmortizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amortization createManyAndReturn
   */
  export type AmortizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * The data used to create many Amortizations.
     */
    data: AmortizationCreateManyInput | AmortizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amortization update
   */
  export type AmortizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Amortization.
     */
    data: XOR<AmortizationUpdateInput, AmortizationUncheckedUpdateInput>
    /**
     * Choose, which Amortization to update.
     */
    where: AmortizationWhereUniqueInput
  }

  /**
   * Amortization updateMany
   */
  export type AmortizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amortizations.
     */
    data: XOR<AmortizationUpdateManyMutationInput, AmortizationUncheckedUpdateManyInput>
    /**
     * Filter which Amortizations to update
     */
    where?: AmortizationWhereInput
    /**
     * Limit how many Amortizations to update.
     */
    limit?: number
  }

  /**
   * Amortization updateManyAndReturn
   */
  export type AmortizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * The data used to update Amortizations.
     */
    data: XOR<AmortizationUpdateManyMutationInput, AmortizationUncheckedUpdateManyInput>
    /**
     * Filter which Amortizations to update
     */
    where?: AmortizationWhereInput
    /**
     * Limit how many Amortizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amortization upsert
   */
  export type AmortizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Amortization to update in case it exists.
     */
    where: AmortizationWhereUniqueInput
    /**
     * In case the Amortization found by the `where` argument doesn't exist, create a new Amortization with this data.
     */
    create: XOR<AmortizationCreateInput, AmortizationUncheckedCreateInput>
    /**
     * In case the Amortization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmortizationUpdateInput, AmortizationUncheckedUpdateInput>
  }

  /**
   * Amortization delete
   */
  export type AmortizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationInclude<ExtArgs> | null
    /**
     * Filter which Amortization to delete.
     */
    where: AmortizationWhereUniqueInput
  }

  /**
   * Amortization deleteMany
   */
  export type AmortizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amortizations to delete
     */
    where?: AmortizationWhereInput
    /**
     * Limit how many Amortizations to delete.
     */
    limit?: number
  }

  /**
   * Amortization without action
   */
  export type AmortizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amortization
     */
    select?: AmortizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amortization
     */
    omit?: AmortizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmortizationInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    icon: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    icon: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    icon: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    icon?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    icon?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    icon?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    user_id: number
    name: string | null
    icon: string | null
    type: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    icon?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    icon?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    icon?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    icon?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "icon" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string | null
      icon: string | null
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Category$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly user_id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
    readonly type: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.transactions
   */
  export type Category$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    category_id: number | null
    name: string | null
    description: string | null
    amount: Decimal | null
    date: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    category_id: number | null
    name: string | null
    description: string | null
    amount: Decimal | null
    date: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    category_id: number
    name: number
    description: number
    amount: number
    date: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    category_id?: true
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    category_id?: true
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    description?: true
    amount?: true
    date?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    description?: true
    amount?: true
    date?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    description?: true
    amount?: true
    date?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    category_id: number
    name: string | null
    description: string | null
    amount: Decimal
    date: string
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_id" | "name" | "description" | "amount" | "date" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category_id: number
      name: string | null
      description: string | null
      amount: Prisma.Decimal
      date: string
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly category_id: FieldRef<"Transaction", 'Int'>
    readonly name: FieldRef<"Transaction", 'String'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly date: FieldRef<"Transaction", 'String'>
    readonly time: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Meta
   */

  export type AggregateMeta = {
    _count: MetaCountAggregateOutputType | null
    _avg: MetaAvgAggregateOutputType | null
    _sum: MetaSumAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  export type MetaAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    target_amount: Decimal | null
  }

  export type MetaSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    target_amount: Decimal | null
  }

  export type MetaMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    description: string | null
    target_amount: Decimal | null
    deadline: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    description: string | null
    target_amount: Decimal | null
    deadline: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    description: number
    target_amount: number
    deadline: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetaAvgAggregateInputType = {
    id?: true
    user_id?: true
    target_amount?: true
  }

  export type MetaSumAggregateInputType = {
    id?: true
    user_id?: true
    target_amount?: true
  }

  export type MetaMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    target_amount?: true
    deadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    target_amount?: true
    deadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    target_amount?: true
    deadline?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meta to aggregate.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metas
    **/
    _count?: true | MetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaMaxAggregateInputType
  }

  export type GetMetaAggregateType<T extends MetaAggregateArgs> = {
        [P in keyof T & keyof AggregateMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeta[P]>
      : GetScalarType<T[P], AggregateMeta[P]>
  }




  export type MetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaWhereInput
    orderBy?: MetaOrderByWithAggregationInput | MetaOrderByWithAggregationInput[]
    by: MetaScalarFieldEnum[] | MetaScalarFieldEnum
    having?: MetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaCountAggregateInputType | true
    _avg?: MetaAvgAggregateInputType
    _sum?: MetaSumAggregateInputType
    _min?: MetaMinAggregateInputType
    _max?: MetaMaxAggregateInputType
  }

  export type MetaGroupByOutputType = {
    id: number
    user_id: number
    name: string
    description: string | null
    target_amount: Decimal
    deadline: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: MetaCountAggregateOutputType | null
    _avg: MetaAvgAggregateOutputType | null
    _sum: MetaSumAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  type GetMetaGroupByPayload<T extends MetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaGroupByOutputType[P]>
            : GetScalarType<T[P], MetaGroupByOutputType[P]>
        }
      >
    >


  export type MetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    target_amount?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trackings?: boolean | Meta$trackingsArgs<ExtArgs>
    _count?: boolean | MetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    target_amount?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    target_amount?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    target_amount?: boolean
    deadline?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "description" | "target_amount" | "deadline" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["meta"]>
  export type MetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trackings?: boolean | Meta$trackingsArgs<ExtArgs>
    _count?: boolean | MetaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meta"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trackings: Prisma.$MetaTrackingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
      description: string | null
      target_amount: Prisma.Decimal
      deadline: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meta"]>
    composites: {}
  }

  type MetaGetPayload<S extends boolean | null | undefined | MetaDefaultArgs> = $Result.GetResult<Prisma.$MetaPayload, S>

  type MetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetaCountAggregateInputType | true
    }

  export interface MetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meta'], meta: { name: 'Meta' } }
    /**
     * Find zero or one Meta that matches the filter.
     * @param {MetaFindUniqueArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetaFindUniqueArgs>(args: SelectSubset<T, MetaFindUniqueArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetaFindUniqueOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetaFindUniqueOrThrowArgs>(args: SelectSubset<T, MetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetaFindFirstArgs>(args?: SelectSubset<T, MetaFindFirstArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetaFindFirstOrThrowArgs>(args?: SelectSubset<T, MetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metas
     * const metas = await prisma.meta.findMany()
     * 
     * // Get first 10 Metas
     * const metas = await prisma.meta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metaWithIdOnly = await prisma.meta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetaFindManyArgs>(args?: SelectSubset<T, MetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meta.
     * @param {MetaCreateArgs} args - Arguments to create a Meta.
     * @example
     * // Create one Meta
     * const Meta = await prisma.meta.create({
     *   data: {
     *     // ... data to create a Meta
     *   }
     * })
     * 
     */
    create<T extends MetaCreateArgs>(args: SelectSubset<T, MetaCreateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metas.
     * @param {MetaCreateManyArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetaCreateManyArgs>(args?: SelectSubset<T, MetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metas and returns the data saved in the database.
     * @param {MetaCreateManyAndReturnArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metas and only return the `id`
     * const metaWithIdOnly = await prisma.meta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetaCreateManyAndReturnArgs>(args?: SelectSubset<T, MetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meta.
     * @param {MetaDeleteArgs} args - Arguments to delete one Meta.
     * @example
     * // Delete one Meta
     * const Meta = await prisma.meta.delete({
     *   where: {
     *     // ... filter to delete one Meta
     *   }
     * })
     * 
     */
    delete<T extends MetaDeleteArgs>(args: SelectSubset<T, MetaDeleteArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meta.
     * @param {MetaUpdateArgs} args - Arguments to update one Meta.
     * @example
     * // Update one Meta
     * const meta = await prisma.meta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetaUpdateArgs>(args: SelectSubset<T, MetaUpdateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metas.
     * @param {MetaDeleteManyArgs} args - Arguments to filter Metas to delete.
     * @example
     * // Delete a few Metas
     * const { count } = await prisma.meta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetaDeleteManyArgs>(args?: SelectSubset<T, MetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetaUpdateManyArgs>(args: SelectSubset<T, MetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas and returns the data updated in the database.
     * @param {MetaUpdateManyAndReturnArgs} args - Arguments to update many Metas.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metas and only return the `id`
     * const metaWithIdOnly = await prisma.meta.updateManyAndReturn({
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
    updateManyAndReturn<T extends MetaUpdateManyAndReturnArgs>(args: SelectSubset<T, MetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meta.
     * @param {MetaUpsertArgs} args - Arguments to update or create a Meta.
     * @example
     * // Update or create a Meta
     * const meta = await prisma.meta.upsert({
     *   create: {
     *     // ... data to create a Meta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meta we want to update
     *   }
     * })
     */
    upsert<T extends MetaUpsertArgs>(args: SelectSubset<T, MetaUpsertArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaCountArgs} args - Arguments to filter Metas to count.
     * @example
     * // Count the number of Metas
     * const count = await prisma.meta.count({
     *   where: {
     *     // ... the filter for the Metas we want to count
     *   }
     * })
    **/
    count<T extends MetaCountArgs>(
      args?: Subset<T, MetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetaAggregateArgs>(args: Subset<T, MetaAggregateArgs>): Prisma.PrismaPromise<GetMetaAggregateType<T>>

    /**
     * Group by Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaGroupByArgs} args - Group by arguments.
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
      T extends MetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaGroupByArgs['orderBy'] }
        : { orderBy?: MetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meta model
   */
  readonly fields: MetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trackings<T extends Meta$trackingsArgs<ExtArgs> = {}>(args?: Subset<T, Meta$trackingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Meta model
   */
  interface MetaFieldRefs {
    readonly id: FieldRef<"Meta", 'Int'>
    readonly user_id: FieldRef<"Meta", 'Int'>
    readonly name: FieldRef<"Meta", 'String'>
    readonly description: FieldRef<"Meta", 'String'>
    readonly target_amount: FieldRef<"Meta", 'Decimal'>
    readonly deadline: FieldRef<"Meta", 'String'>
    readonly status: FieldRef<"Meta", 'String'>
    readonly createdAt: FieldRef<"Meta", 'DateTime'>
    readonly updatedAt: FieldRef<"Meta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meta findUnique
   */
  export type MetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findUniqueOrThrow
   */
  export type MetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findFirst
   */
  export type MetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findFirstOrThrow
   */
  export type MetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findMany
   */
  export type MetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Metas to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta create
   */
  export type MetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The data needed to create a Meta.
     */
    data: XOR<MetaCreateInput, MetaUncheckedCreateInput>
  }

  /**
   * Meta createMany
   */
  export type MetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meta createManyAndReturn
   */
  export type MetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meta update
   */
  export type MetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The data needed to update a Meta.
     */
    data: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
    /**
     * Choose, which Meta to update.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta updateMany
   */
  export type MetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
  }

  /**
   * Meta updateManyAndReturn
   */
  export type MetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meta upsert
   */
  export type MetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The filter to search for the Meta to update in case it exists.
     */
    where: MetaWhereUniqueInput
    /**
     * In case the Meta found by the `where` argument doesn't exist, create a new Meta with this data.
     */
    create: XOR<MetaCreateInput, MetaUncheckedCreateInput>
    /**
     * In case the Meta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
  }

  /**
   * Meta delete
   */
  export type MetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter which Meta to delete.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta deleteMany
   */
  export type MetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metas to delete
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to delete.
     */
    limit?: number
  }

  /**
   * Meta.trackings
   */
  export type Meta$trackingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingInclude<ExtArgs> | null
    where?: MetaTrackingWhereInput
    orderBy?: MetaTrackingOrderByWithRelationInput | MetaTrackingOrderByWithRelationInput[]
    cursor?: MetaTrackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetaTrackingScalarFieldEnum | MetaTrackingScalarFieldEnum[]
  }

  /**
   * Meta without action
   */
  export type MetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
  }


  /**
   * Model MetaTracking
   */

  export type AggregateMetaTracking = {
    _count: MetaTrackingCountAggregateOutputType | null
    _avg: MetaTrackingAvgAggregateOutputType | null
    _sum: MetaTrackingSumAggregateOutputType | null
    _min: MetaTrackingMinAggregateOutputType | null
    _max: MetaTrackingMaxAggregateOutputType | null
  }

  export type MetaTrackingAvgAggregateOutputType = {
    id: number | null
    meta_id: number | null
    amount: Decimal | null
  }

  export type MetaTrackingSumAggregateOutputType = {
    id: number | null
    meta_id: number | null
    amount: Decimal | null
  }

  export type MetaTrackingMinAggregateOutputType = {
    id: number | null
    meta_id: number | null
    amount: Decimal | null
    note: string | null
    date: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaTrackingMaxAggregateOutputType = {
    id: number | null
    meta_id: number | null
    amount: Decimal | null
    note: string | null
    date: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaTrackingCountAggregateOutputType = {
    id: number
    meta_id: number
    amount: number
    note: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetaTrackingAvgAggregateInputType = {
    id?: true
    meta_id?: true
    amount?: true
  }

  export type MetaTrackingSumAggregateInputType = {
    id?: true
    meta_id?: true
    amount?: true
  }

  export type MetaTrackingMinAggregateInputType = {
    id?: true
    meta_id?: true
    amount?: true
    note?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaTrackingMaxAggregateInputType = {
    id?: true
    meta_id?: true
    amount?: true
    note?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaTrackingCountAggregateInputType = {
    id?: true
    meta_id?: true
    amount?: true
    note?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetaTrackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaTracking to aggregate.
     */
    where?: MetaTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaTrackings to fetch.
     */
    orderBy?: MetaTrackingOrderByWithRelationInput | MetaTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetaTrackings
    **/
    _count?: true | MetaTrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetaTrackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetaTrackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaTrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaTrackingMaxAggregateInputType
  }

  export type GetMetaTrackingAggregateType<T extends MetaTrackingAggregateArgs> = {
        [P in keyof T & keyof AggregateMetaTracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetaTracking[P]>
      : GetScalarType<T[P], AggregateMetaTracking[P]>
  }




  export type MetaTrackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaTrackingWhereInput
    orderBy?: MetaTrackingOrderByWithAggregationInput | MetaTrackingOrderByWithAggregationInput[]
    by: MetaTrackingScalarFieldEnum[] | MetaTrackingScalarFieldEnum
    having?: MetaTrackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaTrackingCountAggregateInputType | true
    _avg?: MetaTrackingAvgAggregateInputType
    _sum?: MetaTrackingSumAggregateInputType
    _min?: MetaTrackingMinAggregateInputType
    _max?: MetaTrackingMaxAggregateInputType
  }

  export type MetaTrackingGroupByOutputType = {
    id: number
    meta_id: number
    amount: Decimal
    note: string | null
    date: string
    createdAt: Date
    updatedAt: Date
    _count: MetaTrackingCountAggregateOutputType | null
    _avg: MetaTrackingAvgAggregateOutputType | null
    _sum: MetaTrackingSumAggregateOutputType | null
    _min: MetaTrackingMinAggregateOutputType | null
    _max: MetaTrackingMaxAggregateOutputType | null
  }

  type GetMetaTrackingGroupByPayload<T extends MetaTrackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaTrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaTrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaTrackingGroupByOutputType[P]>
            : GetScalarType<T[P], MetaTrackingGroupByOutputType[P]>
        }
      >
    >


  export type MetaTrackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meta_id?: boolean
    amount?: boolean
    note?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metaTracking"]>

  export type MetaTrackingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meta_id?: boolean
    amount?: boolean
    note?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metaTracking"]>

  export type MetaTrackingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meta_id?: boolean
    amount?: boolean
    note?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metaTracking"]>

  export type MetaTrackingSelectScalar = {
    id?: boolean
    meta_id?: boolean
    amount?: boolean
    note?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetaTrackingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meta_id" | "amount" | "note" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["metaTracking"]>
  export type MetaTrackingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }
  export type MetaTrackingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }
  export type MetaTrackingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
  }

  export type $MetaTrackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetaTracking"
    objects: {
      meta: Prisma.$MetaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      meta_id: number
      amount: Prisma.Decimal
      note: string | null
      date: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metaTracking"]>
    composites: {}
  }

  type MetaTrackingGetPayload<S extends boolean | null | undefined | MetaTrackingDefaultArgs> = $Result.GetResult<Prisma.$MetaTrackingPayload, S>

  type MetaTrackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetaTrackingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetaTrackingCountAggregateInputType | true
    }

  export interface MetaTrackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetaTracking'], meta: { name: 'MetaTracking' } }
    /**
     * Find zero or one MetaTracking that matches the filter.
     * @param {MetaTrackingFindUniqueArgs} args - Arguments to find a MetaTracking
     * @example
     * // Get one MetaTracking
     * const metaTracking = await prisma.metaTracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetaTrackingFindUniqueArgs>(args: SelectSubset<T, MetaTrackingFindUniqueArgs<ExtArgs>>): Prisma__MetaTrackingClient<$Result.GetResult<Prisma.$MetaTrackingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetaTracking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetaTrackingFindUniqueOrThrowArgs} args - Arguments to find a MetaTracking
     * @example
     * // Get one MetaTracking
     * const metaTracking = await prisma.metaTracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetaTrackingFindUniqueOrThrowArgs>(args: SelectSubset<T, MetaTrackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetaTrackingClient<$Result.GetResult<Prisma.$MetaTrackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetaTracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTrackingFindFirstArgs} args - Arguments to find a MetaTracking
     * @example
     * // Get one MetaTracking
     * const metaTracking = await prisma.metaTracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetaTrackingFindFirstArgs>(args?: SelectSubset<T, MetaTrackingFindFirstArgs<ExtArgs>>): Prisma__MetaTrackingClient<$Result.GetResult<Prisma.$MetaTrackingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetaTracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTrackingFindFirstOrThrowArgs} args - Arguments to find a MetaTracking
     * @example
     * // Get one MetaTracking
     * const metaTracking = await prisma.metaTracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetaTrackingFindFirstOrThrowArgs>(args?: SelectSubset<T, MetaTrackingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetaTrackingClient<$Result.GetResult<Prisma.$MetaTrackingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetaTrackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTrackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetaTrackings
     * const metaTrackings = await prisma.metaTracking.findMany()
     * 
     * // Get first 10 MetaTrackings
     * const metaTrackings = await prisma.metaTracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metaTrackingWithIdOnly = await prisma.metaTracking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetaTrackingFindManyArgs>(args?: SelectSubset<T, MetaTrackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetaTracking.
     * @param {MetaTrackingCreateArgs} args - Arguments to create a MetaTracking.
     * @example
     * // Create one MetaTracking
     * const MetaTracking = await prisma.metaTracking.create({
     *   data: {
     *     // ... data to create a MetaTracking
     *   }
     * })
     * 
     */
    create<T extends MetaTrackingCreateArgs>(args: SelectSubset<T, MetaTrackingCreateArgs<ExtArgs>>): Prisma__MetaTrackingClient<$Result.GetResult<Prisma.$MetaTrackingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetaTrackings.
     * @param {MetaTrackingCreateManyArgs} args - Arguments to create many MetaTrackings.
     * @example
     * // Create many MetaTrackings
     * const metaTracking = await prisma.metaTracking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetaTrackingCreateManyArgs>(args?: SelectSubset<T, MetaTrackingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetaTrackings and returns the data saved in the database.
     * @param {MetaTrackingCreateManyAndReturnArgs} args - Arguments to create many MetaTrackings.
     * @example
     * // Create many MetaTrackings
     * const metaTracking = await prisma.metaTracking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetaTrackings and only return the `id`
     * const metaTrackingWithIdOnly = await prisma.metaTracking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetaTrackingCreateManyAndReturnArgs>(args?: SelectSubset<T, MetaTrackingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaTrackingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetaTracking.
     * @param {MetaTrackingDeleteArgs} args - Arguments to delete one MetaTracking.
     * @example
     * // Delete one MetaTracking
     * const MetaTracking = await prisma.metaTracking.delete({
     *   where: {
     *     // ... filter to delete one MetaTracking
     *   }
     * })
     * 
     */
    delete<T extends MetaTrackingDeleteArgs>(args: SelectSubset<T, MetaTrackingDeleteArgs<ExtArgs>>): Prisma__MetaTrackingClient<$Result.GetResult<Prisma.$MetaTrackingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetaTracking.
     * @param {MetaTrackingUpdateArgs} args - Arguments to update one MetaTracking.
     * @example
     * // Update one MetaTracking
     * const metaTracking = await prisma.metaTracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetaTrackingUpdateArgs>(args: SelectSubset<T, MetaTrackingUpdateArgs<ExtArgs>>): Prisma__MetaTrackingClient<$Result.GetResult<Prisma.$MetaTrackingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetaTrackings.
     * @param {MetaTrackingDeleteManyArgs} args - Arguments to filter MetaTrackings to delete.
     * @example
     * // Delete a few MetaTrackings
     * const { count } = await prisma.metaTracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetaTrackingDeleteManyArgs>(args?: SelectSubset<T, MetaTrackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTrackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetaTrackings
     * const metaTracking = await prisma.metaTracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetaTrackingUpdateManyArgs>(args: SelectSubset<T, MetaTrackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaTrackings and returns the data updated in the database.
     * @param {MetaTrackingUpdateManyAndReturnArgs} args - Arguments to update many MetaTrackings.
     * @example
     * // Update many MetaTrackings
     * const metaTracking = await prisma.metaTracking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetaTrackings and only return the `id`
     * const metaTrackingWithIdOnly = await prisma.metaTracking.updateManyAndReturn({
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
    updateManyAndReturn<T extends MetaTrackingUpdateManyAndReturnArgs>(args: SelectSubset<T, MetaTrackingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaTrackingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetaTracking.
     * @param {MetaTrackingUpsertArgs} args - Arguments to update or create a MetaTracking.
     * @example
     * // Update or create a MetaTracking
     * const metaTracking = await prisma.metaTracking.upsert({
     *   create: {
     *     // ... data to create a MetaTracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetaTracking we want to update
     *   }
     * })
     */
    upsert<T extends MetaTrackingUpsertArgs>(args: SelectSubset<T, MetaTrackingUpsertArgs<ExtArgs>>): Prisma__MetaTrackingClient<$Result.GetResult<Prisma.$MetaTrackingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetaTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTrackingCountArgs} args - Arguments to filter MetaTrackings to count.
     * @example
     * // Count the number of MetaTrackings
     * const count = await prisma.metaTracking.count({
     *   where: {
     *     // ... the filter for the MetaTrackings we want to count
     *   }
     * })
    **/
    count<T extends MetaTrackingCountArgs>(
      args?: Subset<T, MetaTrackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaTrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetaTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetaTrackingAggregateArgs>(args: Subset<T, MetaTrackingAggregateArgs>): Prisma.PrismaPromise<GetMetaTrackingAggregateType<T>>

    /**
     * Group by MetaTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTrackingGroupByArgs} args - Group by arguments.
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
      T extends MetaTrackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaTrackingGroupByArgs['orderBy'] }
        : { orderBy?: MetaTrackingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetaTrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetaTracking model
   */
  readonly fields: MetaTrackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetaTracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaTrackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meta<T extends MetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetaDefaultArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MetaTracking model
   */
  interface MetaTrackingFieldRefs {
    readonly id: FieldRef<"MetaTracking", 'Int'>
    readonly meta_id: FieldRef<"MetaTracking", 'Int'>
    readonly amount: FieldRef<"MetaTracking", 'Decimal'>
    readonly note: FieldRef<"MetaTracking", 'String'>
    readonly date: FieldRef<"MetaTracking", 'String'>
    readonly createdAt: FieldRef<"MetaTracking", 'DateTime'>
    readonly updatedAt: FieldRef<"MetaTracking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MetaTracking findUnique
   */
  export type MetaTrackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingInclude<ExtArgs> | null
    /**
     * Filter, which MetaTracking to fetch.
     */
    where: MetaTrackingWhereUniqueInput
  }

  /**
   * MetaTracking findUniqueOrThrow
   */
  export type MetaTrackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingInclude<ExtArgs> | null
    /**
     * Filter, which MetaTracking to fetch.
     */
    where: MetaTrackingWhereUniqueInput
  }

  /**
   * MetaTracking findFirst
   */
  export type MetaTrackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingInclude<ExtArgs> | null
    /**
     * Filter, which MetaTracking to fetch.
     */
    where?: MetaTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaTrackings to fetch.
     */
    orderBy?: MetaTrackingOrderByWithRelationInput | MetaTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaTrackings.
     */
    cursor?: MetaTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaTrackings.
     */
    distinct?: MetaTrackingScalarFieldEnum | MetaTrackingScalarFieldEnum[]
  }

  /**
   * MetaTracking findFirstOrThrow
   */
  export type MetaTrackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingInclude<ExtArgs> | null
    /**
     * Filter, which MetaTracking to fetch.
     */
    where?: MetaTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaTrackings to fetch.
     */
    orderBy?: MetaTrackingOrderByWithRelationInput | MetaTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaTrackings.
     */
    cursor?: MetaTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaTrackings.
     */
    distinct?: MetaTrackingScalarFieldEnum | MetaTrackingScalarFieldEnum[]
  }

  /**
   * MetaTracking findMany
   */
  export type MetaTrackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingInclude<ExtArgs> | null
    /**
     * Filter, which MetaTrackings to fetch.
     */
    where?: MetaTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaTrackings to fetch.
     */
    orderBy?: MetaTrackingOrderByWithRelationInput | MetaTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetaTrackings.
     */
    cursor?: MetaTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaTrackings.
     */
    skip?: number
    distinct?: MetaTrackingScalarFieldEnum | MetaTrackingScalarFieldEnum[]
  }

  /**
   * MetaTracking create
   */
  export type MetaTrackingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingInclude<ExtArgs> | null
    /**
     * The data needed to create a MetaTracking.
     */
    data: XOR<MetaTrackingCreateInput, MetaTrackingUncheckedCreateInput>
  }

  /**
   * MetaTracking createMany
   */
  export type MetaTrackingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetaTrackings.
     */
    data: MetaTrackingCreateManyInput | MetaTrackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetaTracking createManyAndReturn
   */
  export type MetaTrackingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * The data used to create many MetaTrackings.
     */
    data: MetaTrackingCreateManyInput | MetaTrackingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetaTracking update
   */
  export type MetaTrackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingInclude<ExtArgs> | null
    /**
     * The data needed to update a MetaTracking.
     */
    data: XOR<MetaTrackingUpdateInput, MetaTrackingUncheckedUpdateInput>
    /**
     * Choose, which MetaTracking to update.
     */
    where: MetaTrackingWhereUniqueInput
  }

  /**
   * MetaTracking updateMany
   */
  export type MetaTrackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetaTrackings.
     */
    data: XOR<MetaTrackingUpdateManyMutationInput, MetaTrackingUncheckedUpdateManyInput>
    /**
     * Filter which MetaTrackings to update
     */
    where?: MetaTrackingWhereInput
    /**
     * Limit how many MetaTrackings to update.
     */
    limit?: number
  }

  /**
   * MetaTracking updateManyAndReturn
   */
  export type MetaTrackingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * The data used to update MetaTrackings.
     */
    data: XOR<MetaTrackingUpdateManyMutationInput, MetaTrackingUncheckedUpdateManyInput>
    /**
     * Filter which MetaTrackings to update
     */
    where?: MetaTrackingWhereInput
    /**
     * Limit how many MetaTrackings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetaTracking upsert
   */
  export type MetaTrackingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingInclude<ExtArgs> | null
    /**
     * The filter to search for the MetaTracking to update in case it exists.
     */
    where: MetaTrackingWhereUniqueInput
    /**
     * In case the MetaTracking found by the `where` argument doesn't exist, create a new MetaTracking with this data.
     */
    create: XOR<MetaTrackingCreateInput, MetaTrackingUncheckedCreateInput>
    /**
     * In case the MetaTracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaTrackingUpdateInput, MetaTrackingUncheckedUpdateInput>
  }

  /**
   * MetaTracking delete
   */
  export type MetaTrackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingInclude<ExtArgs> | null
    /**
     * Filter which MetaTracking to delete.
     */
    where: MetaTrackingWhereUniqueInput
  }

  /**
   * MetaTracking deleteMany
   */
  export type MetaTrackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaTrackings to delete
     */
    where?: MetaTrackingWhereInput
    /**
     * Limit how many MetaTrackings to delete.
     */
    limit?: number
  }

  /**
   * MetaTracking without action
   */
  export type MetaTrackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTracking
     */
    select?: MetaTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaTracking
     */
    omit?: MetaTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaTrackingInclude<ExtArgs> | null
  }


  /**
   * Model SalaryHistory
   */

  export type AggregateSalaryHistory = {
    _count: SalaryHistoryCountAggregateOutputType | null
    _avg: SalaryHistoryAvgAggregateOutputType | null
    _sum: SalaryHistorySumAggregateOutputType | null
    _min: SalaryHistoryMinAggregateOutputType | null
    _max: SalaryHistoryMaxAggregateOutputType | null
  }

  export type SalaryHistoryAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    salary_amount: Decimal | null
  }

  export type SalaryHistorySumAggregateOutputType = {
    id: number | null
    user_id: number | null
    salary_amount: Decimal | null
  }

  export type SalaryHistoryMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    salary_amount: Decimal | null
    effective_date: string | null
    month_name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalaryHistoryMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    salary_amount: Decimal | null
    effective_date: string | null
    month_name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalaryHistoryCountAggregateOutputType = {
    id: number
    user_id: number
    salary_amount: number
    effective_date: number
    month_name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalaryHistoryAvgAggregateInputType = {
    id?: true
    user_id?: true
    salary_amount?: true
  }

  export type SalaryHistorySumAggregateInputType = {
    id?: true
    user_id?: true
    salary_amount?: true
  }

  export type SalaryHistoryMinAggregateInputType = {
    id?: true
    user_id?: true
    salary_amount?: true
    effective_date?: true
    month_name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalaryHistoryMaxAggregateInputType = {
    id?: true
    user_id?: true
    salary_amount?: true
    effective_date?: true
    month_name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalaryHistoryCountAggregateInputType = {
    id?: true
    user_id?: true
    salary_amount?: true
    effective_date?: true
    month_name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalaryHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryHistory to aggregate.
     */
    where?: SalaryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryHistories to fetch.
     */
    orderBy?: SalaryHistoryOrderByWithRelationInput | SalaryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalaryHistories
    **/
    _count?: true | SalaryHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaryHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaryHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaryHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaryHistoryMaxAggregateInputType
  }

  export type GetSalaryHistoryAggregateType<T extends SalaryHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSalaryHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalaryHistory[P]>
      : GetScalarType<T[P], AggregateSalaryHistory[P]>
  }




  export type SalaryHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryHistoryWhereInput
    orderBy?: SalaryHistoryOrderByWithAggregationInput | SalaryHistoryOrderByWithAggregationInput[]
    by: SalaryHistoryScalarFieldEnum[] | SalaryHistoryScalarFieldEnum
    having?: SalaryHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaryHistoryCountAggregateInputType | true
    _avg?: SalaryHistoryAvgAggregateInputType
    _sum?: SalaryHistorySumAggregateInputType
    _min?: SalaryHistoryMinAggregateInputType
    _max?: SalaryHistoryMaxAggregateInputType
  }

  export type SalaryHistoryGroupByOutputType = {
    id: number
    user_id: number
    salary_amount: Decimal
    effective_date: string
    month_name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SalaryHistoryCountAggregateOutputType | null
    _avg: SalaryHistoryAvgAggregateOutputType | null
    _sum: SalaryHistorySumAggregateOutputType | null
    _min: SalaryHistoryMinAggregateOutputType | null
    _max: SalaryHistoryMaxAggregateOutputType | null
  }

  type GetSalaryHistoryGroupByPayload<T extends SalaryHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaryHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaryHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaryHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], SalaryHistoryGroupByOutputType[P]>
        }
      >
    >


  export type SalaryHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    salary_amount?: boolean
    effective_date?: boolean
    month_name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salaryHistory"]>

  export type SalaryHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    salary_amount?: boolean
    effective_date?: boolean
    month_name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salaryHistory"]>

  export type SalaryHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    salary_amount?: boolean
    effective_date?: boolean
    month_name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salaryHistory"]>

  export type SalaryHistorySelectScalar = {
    id?: boolean
    user_id?: boolean
    salary_amount?: boolean
    effective_date?: boolean
    month_name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalaryHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "salary_amount" | "effective_date" | "month_name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["salaryHistory"]>
  export type SalaryHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SalaryHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SalaryHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SalaryHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalaryHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      salary_amount: Prisma.Decimal
      effective_date: string
      month_name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salaryHistory"]>
    composites: {}
  }

  type SalaryHistoryGetPayload<S extends boolean | null | undefined | SalaryHistoryDefaultArgs> = $Result.GetResult<Prisma.$SalaryHistoryPayload, S>

  type SalaryHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaryHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaryHistoryCountAggregateInputType | true
    }

  export interface SalaryHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalaryHistory'], meta: { name: 'SalaryHistory' } }
    /**
     * Find zero or one SalaryHistory that matches the filter.
     * @param {SalaryHistoryFindUniqueArgs} args - Arguments to find a SalaryHistory
     * @example
     * // Get one SalaryHistory
     * const salaryHistory = await prisma.salaryHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaryHistoryFindUniqueArgs>(args: SelectSubset<T, SalaryHistoryFindUniqueArgs<ExtArgs>>): Prisma__SalaryHistoryClient<$Result.GetResult<Prisma.$SalaryHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalaryHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaryHistoryFindUniqueOrThrowArgs} args - Arguments to find a SalaryHistory
     * @example
     * // Get one SalaryHistory
     * const salaryHistory = await prisma.salaryHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaryHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaryHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaryHistoryClient<$Result.GetResult<Prisma.$SalaryHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalaryHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryHistoryFindFirstArgs} args - Arguments to find a SalaryHistory
     * @example
     * // Get one SalaryHistory
     * const salaryHistory = await prisma.salaryHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaryHistoryFindFirstArgs>(args?: SelectSubset<T, SalaryHistoryFindFirstArgs<ExtArgs>>): Prisma__SalaryHistoryClient<$Result.GetResult<Prisma.$SalaryHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalaryHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryHistoryFindFirstOrThrowArgs} args - Arguments to find a SalaryHistory
     * @example
     * // Get one SalaryHistory
     * const salaryHistory = await prisma.salaryHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaryHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaryHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaryHistoryClient<$Result.GetResult<Prisma.$SalaryHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalaryHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalaryHistories
     * const salaryHistories = await prisma.salaryHistory.findMany()
     * 
     * // Get first 10 SalaryHistories
     * const salaryHistories = await prisma.salaryHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaryHistoryWithIdOnly = await prisma.salaryHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaryHistoryFindManyArgs>(args?: SelectSubset<T, SalaryHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalaryHistory.
     * @param {SalaryHistoryCreateArgs} args - Arguments to create a SalaryHistory.
     * @example
     * // Create one SalaryHistory
     * const SalaryHistory = await prisma.salaryHistory.create({
     *   data: {
     *     // ... data to create a SalaryHistory
     *   }
     * })
     * 
     */
    create<T extends SalaryHistoryCreateArgs>(args: SelectSubset<T, SalaryHistoryCreateArgs<ExtArgs>>): Prisma__SalaryHistoryClient<$Result.GetResult<Prisma.$SalaryHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalaryHistories.
     * @param {SalaryHistoryCreateManyArgs} args - Arguments to create many SalaryHistories.
     * @example
     * // Create many SalaryHistories
     * const salaryHistory = await prisma.salaryHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaryHistoryCreateManyArgs>(args?: SelectSubset<T, SalaryHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalaryHistories and returns the data saved in the database.
     * @param {SalaryHistoryCreateManyAndReturnArgs} args - Arguments to create many SalaryHistories.
     * @example
     * // Create many SalaryHistories
     * const salaryHistory = await prisma.salaryHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalaryHistories and only return the `id`
     * const salaryHistoryWithIdOnly = await prisma.salaryHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaryHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaryHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalaryHistory.
     * @param {SalaryHistoryDeleteArgs} args - Arguments to delete one SalaryHistory.
     * @example
     * // Delete one SalaryHistory
     * const SalaryHistory = await prisma.salaryHistory.delete({
     *   where: {
     *     // ... filter to delete one SalaryHistory
     *   }
     * })
     * 
     */
    delete<T extends SalaryHistoryDeleteArgs>(args: SelectSubset<T, SalaryHistoryDeleteArgs<ExtArgs>>): Prisma__SalaryHistoryClient<$Result.GetResult<Prisma.$SalaryHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalaryHistory.
     * @param {SalaryHistoryUpdateArgs} args - Arguments to update one SalaryHistory.
     * @example
     * // Update one SalaryHistory
     * const salaryHistory = await prisma.salaryHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaryHistoryUpdateArgs>(args: SelectSubset<T, SalaryHistoryUpdateArgs<ExtArgs>>): Prisma__SalaryHistoryClient<$Result.GetResult<Prisma.$SalaryHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalaryHistories.
     * @param {SalaryHistoryDeleteManyArgs} args - Arguments to filter SalaryHistories to delete.
     * @example
     * // Delete a few SalaryHistories
     * const { count } = await prisma.salaryHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaryHistoryDeleteManyArgs>(args?: SelectSubset<T, SalaryHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalaryHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalaryHistories
     * const salaryHistory = await prisma.salaryHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaryHistoryUpdateManyArgs>(args: SelectSubset<T, SalaryHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalaryHistories and returns the data updated in the database.
     * @param {SalaryHistoryUpdateManyAndReturnArgs} args - Arguments to update many SalaryHistories.
     * @example
     * // Update many SalaryHistories
     * const salaryHistory = await prisma.salaryHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalaryHistories and only return the `id`
     * const salaryHistoryWithIdOnly = await prisma.salaryHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalaryHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaryHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalaryHistory.
     * @param {SalaryHistoryUpsertArgs} args - Arguments to update or create a SalaryHistory.
     * @example
     * // Update or create a SalaryHistory
     * const salaryHistory = await prisma.salaryHistory.upsert({
     *   create: {
     *     // ... data to create a SalaryHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalaryHistory we want to update
     *   }
     * })
     */
    upsert<T extends SalaryHistoryUpsertArgs>(args: SelectSubset<T, SalaryHistoryUpsertArgs<ExtArgs>>): Prisma__SalaryHistoryClient<$Result.GetResult<Prisma.$SalaryHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalaryHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryHistoryCountArgs} args - Arguments to filter SalaryHistories to count.
     * @example
     * // Count the number of SalaryHistories
     * const count = await prisma.salaryHistory.count({
     *   where: {
     *     // ... the filter for the SalaryHistories we want to count
     *   }
     * })
    **/
    count<T extends SalaryHistoryCountArgs>(
      args?: Subset<T, SalaryHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaryHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalaryHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalaryHistoryAggregateArgs>(args: Subset<T, SalaryHistoryAggregateArgs>): Prisma.PrismaPromise<GetSalaryHistoryAggregateType<T>>

    /**
     * Group by SalaryHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryHistoryGroupByArgs} args - Group by arguments.
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
      T extends SalaryHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaryHistoryGroupByArgs['orderBy'] }
        : { orderBy?: SalaryHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalaryHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaryHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalaryHistory model
   */
  readonly fields: SalaryHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalaryHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaryHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SalaryHistory model
   */
  interface SalaryHistoryFieldRefs {
    readonly id: FieldRef<"SalaryHistory", 'Int'>
    readonly user_id: FieldRef<"SalaryHistory", 'Int'>
    readonly salary_amount: FieldRef<"SalaryHistory", 'Decimal'>
    readonly effective_date: FieldRef<"SalaryHistory", 'String'>
    readonly month_name: FieldRef<"SalaryHistory", 'String'>
    readonly description: FieldRef<"SalaryHistory", 'String'>
    readonly createdAt: FieldRef<"SalaryHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"SalaryHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalaryHistory findUnique
   */
  export type SalaryHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SalaryHistory to fetch.
     */
    where: SalaryHistoryWhereUniqueInput
  }

  /**
   * SalaryHistory findUniqueOrThrow
   */
  export type SalaryHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SalaryHistory to fetch.
     */
    where: SalaryHistoryWhereUniqueInput
  }

  /**
   * SalaryHistory findFirst
   */
  export type SalaryHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SalaryHistory to fetch.
     */
    where?: SalaryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryHistories to fetch.
     */
    orderBy?: SalaryHistoryOrderByWithRelationInput | SalaryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryHistories.
     */
    cursor?: SalaryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryHistories.
     */
    distinct?: SalaryHistoryScalarFieldEnum | SalaryHistoryScalarFieldEnum[]
  }

  /**
   * SalaryHistory findFirstOrThrow
   */
  export type SalaryHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SalaryHistory to fetch.
     */
    where?: SalaryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryHistories to fetch.
     */
    orderBy?: SalaryHistoryOrderByWithRelationInput | SalaryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryHistories.
     */
    cursor?: SalaryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryHistories.
     */
    distinct?: SalaryHistoryScalarFieldEnum | SalaryHistoryScalarFieldEnum[]
  }

  /**
   * SalaryHistory findMany
   */
  export type SalaryHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SalaryHistories to fetch.
     */
    where?: SalaryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryHistories to fetch.
     */
    orderBy?: SalaryHistoryOrderByWithRelationInput | SalaryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalaryHistories.
     */
    cursor?: SalaryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryHistories.
     */
    skip?: number
    distinct?: SalaryHistoryScalarFieldEnum | SalaryHistoryScalarFieldEnum[]
  }

  /**
   * SalaryHistory create
   */
  export type SalaryHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SalaryHistory.
     */
    data: XOR<SalaryHistoryCreateInput, SalaryHistoryUncheckedCreateInput>
  }

  /**
   * SalaryHistory createMany
   */
  export type SalaryHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalaryHistories.
     */
    data: SalaryHistoryCreateManyInput | SalaryHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalaryHistory createManyAndReturn
   */
  export type SalaryHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many SalaryHistories.
     */
    data: SalaryHistoryCreateManyInput | SalaryHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalaryHistory update
   */
  export type SalaryHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SalaryHistory.
     */
    data: XOR<SalaryHistoryUpdateInput, SalaryHistoryUncheckedUpdateInput>
    /**
     * Choose, which SalaryHistory to update.
     */
    where: SalaryHistoryWhereUniqueInput
  }

  /**
   * SalaryHistory updateMany
   */
  export type SalaryHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalaryHistories.
     */
    data: XOR<SalaryHistoryUpdateManyMutationInput, SalaryHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SalaryHistories to update
     */
    where?: SalaryHistoryWhereInput
    /**
     * Limit how many SalaryHistories to update.
     */
    limit?: number
  }

  /**
   * SalaryHistory updateManyAndReturn
   */
  export type SalaryHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * The data used to update SalaryHistories.
     */
    data: XOR<SalaryHistoryUpdateManyMutationInput, SalaryHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SalaryHistories to update
     */
    where?: SalaryHistoryWhereInput
    /**
     * Limit how many SalaryHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalaryHistory upsert
   */
  export type SalaryHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SalaryHistory to update in case it exists.
     */
    where: SalaryHistoryWhereUniqueInput
    /**
     * In case the SalaryHistory found by the `where` argument doesn't exist, create a new SalaryHistory with this data.
     */
    create: XOR<SalaryHistoryCreateInput, SalaryHistoryUncheckedCreateInput>
    /**
     * In case the SalaryHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaryHistoryUpdateInput, SalaryHistoryUncheckedUpdateInput>
  }

  /**
   * SalaryHistory delete
   */
  export type SalaryHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryInclude<ExtArgs> | null
    /**
     * Filter which SalaryHistory to delete.
     */
    where: SalaryHistoryWhereUniqueInput
  }

  /**
   * SalaryHistory deleteMany
   */
  export type SalaryHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryHistories to delete
     */
    where?: SalaryHistoryWhereInput
    /**
     * Limit how many SalaryHistories to delete.
     */
    limit?: number
  }

  /**
   * SalaryHistory without action
   */
  export type SalaryHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryHistory
     */
    select?: SalaryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryHistory
     */
    omit?: SalaryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryHistoryInclude<ExtArgs> | null
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


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    rol_id: 'rol_id',
    name: 'name',
    last_name: 'last_name',
    username: 'username',
    email: 'email',
    password: 'password',
    phone: 'phone',
    avatar: 'avatar',
    firebaseUid: 'firebaseUid',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    os: 'os',
    browser: 'browser',
    isMobile: 'isMobile',
    userAgent: 'userAgent',
    brand: 'brand',
    model: 'model',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const NotificationPreferenceScalarFieldEnum: {
    id: 'id',
    device_id: 'device_id',
    pushEnabled: 'pushEnabled',
    subscription: 'subscription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationPreferenceScalarFieldEnum = (typeof NotificationPreferenceScalarFieldEnum)[keyof typeof NotificationPreferenceScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    debt_id: 'debt_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const VerificationCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    isUsed: 'isUsed'
  };

  export type VerificationCodeScalarFieldEnum = (typeof VerificationCodeScalarFieldEnum)[keyof typeof VerificationCodeScalarFieldEnum]


  export const DebtScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    description: 'description',
    amount: 'amount',
    interest_rate: 'interest_rate',
    duration_months: 'duration_months',
    method: 'method',
    start_date: 'start_date',
    end_date: 'end_date',
    status: 'status',
    notifyEnabled: 'notifyEnabled',
    daysBeforeNotify: 'daysBeforeNotify',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DebtScalarFieldEnum = (typeof DebtScalarFieldEnum)[keyof typeof DebtScalarFieldEnum]


  export const AmortizationScalarFieldEnum: {
    id: 'id',
    debt_id: 'debt_id',
    number_months: 'number_months',
    date: 'date',
    quota: 'quota',
    interest: 'interest',
    amortized: 'amortized',
    outstanding: 'outstanding',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AmortizationScalarFieldEnum = (typeof AmortizationScalarFieldEnum)[keyof typeof AmortizationScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    icon: 'icon',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    name: 'name',
    description: 'description',
    amount: 'amount',
    date: 'date',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const MetaScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    description: 'description',
    target_amount: 'target_amount',
    deadline: 'deadline',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetaScalarFieldEnum = (typeof MetaScalarFieldEnum)[keyof typeof MetaScalarFieldEnum]


  export const MetaTrackingScalarFieldEnum: {
    id: 'id',
    meta_id: 'meta_id',
    amount: 'amount',
    note: 'note',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetaTrackingScalarFieldEnum = (typeof MetaTrackingScalarFieldEnum)[keyof typeof MetaTrackingScalarFieldEnum]


  export const SalaryHistoryScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    salary_amount: 'salary_amount',
    effective_date: 'effective_date',
    month_name: 'month_name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalaryHistoryScalarFieldEnum = (typeof SalaryHistoryScalarFieldEnum)[keyof typeof SalaryHistoryScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    description?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    description?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    rol_id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    firebaseUid?: StringNullableFilter<"User"> | string | null
    status?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    categories?: CategoryListRelationFilter
    debts?: DebtListRelationFilter
    metas?: MetaListRelationFilter
    devices?: DeviceListRelationFilter
    verificationCodes?: VerificationCodeListRelationFilter
    salary_history?: SalaryHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    rol_id?: SortOrder
    name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    firebaseUid?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
    debts?: DebtOrderByRelationAggregateInput
    metas?: MetaOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
    verificationCodes?: VerificationCodeOrderByRelationAggregateInput
    salary_history?: SalaryHistoryOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    firebaseUid?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    rol_id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    status?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    categories?: CategoryListRelationFilter
    debts?: DebtListRelationFilter
    metas?: MetaListRelationFilter
    devices?: DeviceListRelationFilter
    verificationCodes?: VerificationCodeListRelationFilter
    salary_history?: SalaryHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "username" | "email" | "firebaseUid">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    rol_id?: SortOrder
    name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    firebaseUid?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    rol_id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    firebaseUid?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: IntFilter<"Device"> | number
    user_id?: IntFilter<"Device"> | number
    os?: StringNullableFilter<"Device"> | string | null
    browser?: StringNullableFilter<"Device"> | string | null
    isMobile?: BoolFilter<"Device"> | boolean
    userAgent?: StringNullableFilter<"Device"> | string | null
    brand?: StringNullableFilter<"Device"> | string | null
    model?: StringNullableFilter<"Device"> | string | null
    status?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    notificationPreferences?: NotificationPreferenceListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    os?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    isMobile?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    notificationPreferences?: NotificationPreferenceOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    user_id?: IntFilter<"Device"> | number
    os?: StringNullableFilter<"Device"> | string | null
    browser?: StringNullableFilter<"Device"> | string | null
    isMobile?: BoolFilter<"Device"> | boolean
    userAgent?: StringNullableFilter<"Device"> | string | null
    brand?: StringNullableFilter<"Device"> | string | null
    model?: StringNullableFilter<"Device"> | string | null
    status?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    notificationPreferences?: NotificationPreferenceListRelationFilter
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    os?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    isMobile?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Device"> | number
    user_id?: IntWithAggregatesFilter<"Device"> | number
    os?: StringNullableWithAggregatesFilter<"Device"> | string | null
    browser?: StringNullableWithAggregatesFilter<"Device"> | string | null
    isMobile?: BoolWithAggregatesFilter<"Device"> | boolean
    userAgent?: StringNullableWithAggregatesFilter<"Device"> | string | null
    brand?: StringNullableWithAggregatesFilter<"Device"> | string | null
    model?: StringNullableWithAggregatesFilter<"Device"> | string | null
    status?: StringWithAggregatesFilter<"Device"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type NotificationPreferenceWhereInput = {
    AND?: NotificationPreferenceWhereInput | NotificationPreferenceWhereInput[]
    OR?: NotificationPreferenceWhereInput[]
    NOT?: NotificationPreferenceWhereInput | NotificationPreferenceWhereInput[]
    id?: IntFilter<"NotificationPreference"> | number
    device_id?: IntNullableFilter<"NotificationPreference"> | number | null
    pushEnabled?: BoolFilter<"NotificationPreference"> | boolean
    subscription?: StringNullableFilter<"NotificationPreference"> | string | null
    createdAt?: DateTimeFilter<"NotificationPreference"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationPreference"> | Date | string
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
  }

  export type NotificationPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    device_id?: SortOrderInput | SortOrder
    pushEnabled?: SortOrder
    subscription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type NotificationPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationPreferenceWhereInput | NotificationPreferenceWhereInput[]
    OR?: NotificationPreferenceWhereInput[]
    NOT?: NotificationPreferenceWhereInput | NotificationPreferenceWhereInput[]
    device_id?: IntNullableFilter<"NotificationPreference"> | number | null
    pushEnabled?: BoolFilter<"NotificationPreference"> | boolean
    subscription?: StringNullableFilter<"NotificationPreference"> | string | null
    createdAt?: DateTimeFilter<"NotificationPreference"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationPreference"> | Date | string
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
  }, "id">

  export type NotificationPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    device_id?: SortOrderInput | SortOrder
    pushEnabled?: SortOrder
    subscription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationPreferenceCountOrderByAggregateInput
    _avg?: NotificationPreferenceAvgOrderByAggregateInput
    _max?: NotificationPreferenceMaxOrderByAggregateInput
    _min?: NotificationPreferenceMinOrderByAggregateInput
    _sum?: NotificationPreferenceSumOrderByAggregateInput
  }

  export type NotificationPreferenceScalarWhereWithAggregatesInput = {
    AND?: NotificationPreferenceScalarWhereWithAggregatesInput | NotificationPreferenceScalarWhereWithAggregatesInput[]
    OR?: NotificationPreferenceScalarWhereWithAggregatesInput[]
    NOT?: NotificationPreferenceScalarWhereWithAggregatesInput | NotificationPreferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotificationPreference"> | number
    device_id?: IntNullableWithAggregatesFilter<"NotificationPreference"> | number | null
    pushEnabled?: BoolWithAggregatesFilter<"NotificationPreference"> | boolean
    subscription?: StringNullableWithAggregatesFilter<"NotificationPreference"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NotificationPreference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationPreference"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    user_id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    debt_id?: IntNullableFilter<"Notification"> | number | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    debt?: XOR<DebtNullableScalarRelationFilter, DebtWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    debt_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    debt?: DebtOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    user_id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    debt_id?: IntNullableFilter<"Notification"> | number | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    debt?: XOR<DebtNullableScalarRelationFilter, DebtWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    debt_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    user_id?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    debt_id?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type VerificationCodeWhereInput = {
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    id?: IntFilter<"VerificationCode"> | number
    code?: StringFilter<"VerificationCode"> | string
    userId?: IntFilter<"VerificationCode"> | number
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    isUsed?: BoolFilter<"VerificationCode"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VerificationCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    userId?: IntFilter<"VerificationCode"> | number
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    isUsed?: BoolFilter<"VerificationCode"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "code">

  export type VerificationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    _count?: VerificationCodeCountOrderByAggregateInput
    _avg?: VerificationCodeAvgOrderByAggregateInput
    _max?: VerificationCodeMaxOrderByAggregateInput
    _min?: VerificationCodeMinOrderByAggregateInput
    _sum?: VerificationCodeSumOrderByAggregateInput
  }

  export type VerificationCodeScalarWhereWithAggregatesInput = {
    AND?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    OR?: VerificationCodeScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VerificationCode"> | number
    code?: StringWithAggregatesFilter<"VerificationCode"> | string
    userId?: IntWithAggregatesFilter<"VerificationCode"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"VerificationCode"> | boolean
  }

  export type DebtWhereInput = {
    AND?: DebtWhereInput | DebtWhereInput[]
    OR?: DebtWhereInput[]
    NOT?: DebtWhereInput | DebtWhereInput[]
    id?: IntFilter<"Debt"> | number
    user_id?: IntFilter<"Debt"> | number
    name?: StringNullableFilter<"Debt"> | string | null
    description?: StringNullableFilter<"Debt"> | string | null
    amount?: DecimalNullableFilter<"Debt"> | Decimal | DecimalJsLike | number | string | null
    interest_rate?: DecimalNullableFilter<"Debt"> | Decimal | DecimalJsLike | number | string | null
    duration_months?: IntNullableFilter<"Debt"> | number | null
    method?: StringNullableFilter<"Debt"> | string | null
    start_date?: StringNullableFilter<"Debt"> | string | null
    end_date?: StringNullableFilter<"Debt"> | string | null
    status?: StringNullableFilter<"Debt"> | string | null
    notifyEnabled?: BoolNullableFilter<"Debt"> | boolean | null
    daysBeforeNotify?: IntNullableFilter<"Debt"> | number | null
    createdAt?: DateTimeFilter<"Debt"> | Date | string
    updatedAt?: DateTimeFilter<"Debt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    amortizations?: AmortizationListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type DebtOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    interest_rate?: SortOrderInput | SortOrder
    duration_months?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    notifyEnabled?: SortOrderInput | SortOrder
    daysBeforeNotify?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    amortizations?: AmortizationOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type DebtWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DebtWhereInput | DebtWhereInput[]
    OR?: DebtWhereInput[]
    NOT?: DebtWhereInput | DebtWhereInput[]
    user_id?: IntFilter<"Debt"> | number
    name?: StringNullableFilter<"Debt"> | string | null
    description?: StringNullableFilter<"Debt"> | string | null
    amount?: DecimalNullableFilter<"Debt"> | Decimal | DecimalJsLike | number | string | null
    interest_rate?: DecimalNullableFilter<"Debt"> | Decimal | DecimalJsLike | number | string | null
    duration_months?: IntNullableFilter<"Debt"> | number | null
    method?: StringNullableFilter<"Debt"> | string | null
    start_date?: StringNullableFilter<"Debt"> | string | null
    end_date?: StringNullableFilter<"Debt"> | string | null
    status?: StringNullableFilter<"Debt"> | string | null
    notifyEnabled?: BoolNullableFilter<"Debt"> | boolean | null
    daysBeforeNotify?: IntNullableFilter<"Debt"> | number | null
    createdAt?: DateTimeFilter<"Debt"> | Date | string
    updatedAt?: DateTimeFilter<"Debt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    amortizations?: AmortizationListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id">

  export type DebtOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    interest_rate?: SortOrderInput | SortOrder
    duration_months?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    notifyEnabled?: SortOrderInput | SortOrder
    daysBeforeNotify?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DebtCountOrderByAggregateInput
    _avg?: DebtAvgOrderByAggregateInput
    _max?: DebtMaxOrderByAggregateInput
    _min?: DebtMinOrderByAggregateInput
    _sum?: DebtSumOrderByAggregateInput
  }

  export type DebtScalarWhereWithAggregatesInput = {
    AND?: DebtScalarWhereWithAggregatesInput | DebtScalarWhereWithAggregatesInput[]
    OR?: DebtScalarWhereWithAggregatesInput[]
    NOT?: DebtScalarWhereWithAggregatesInput | DebtScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Debt"> | number
    user_id?: IntWithAggregatesFilter<"Debt"> | number
    name?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    description?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    amount?: DecimalNullableWithAggregatesFilter<"Debt"> | Decimal | DecimalJsLike | number | string | null
    interest_rate?: DecimalNullableWithAggregatesFilter<"Debt"> | Decimal | DecimalJsLike | number | string | null
    duration_months?: IntNullableWithAggregatesFilter<"Debt"> | number | null
    method?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    start_date?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    end_date?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    status?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    notifyEnabled?: BoolNullableWithAggregatesFilter<"Debt"> | boolean | null
    daysBeforeNotify?: IntNullableWithAggregatesFilter<"Debt"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Debt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Debt"> | Date | string
  }

  export type AmortizationWhereInput = {
    AND?: AmortizationWhereInput | AmortizationWhereInput[]
    OR?: AmortizationWhereInput[]
    NOT?: AmortizationWhereInput | AmortizationWhereInput[]
    id?: IntFilter<"Amortization"> | number
    debt_id?: IntFilter<"Amortization"> | number
    number_months?: IntNullableFilter<"Amortization"> | number | null
    date?: StringNullableFilter<"Amortization"> | string | null
    quota?: DecimalNullableFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    interest?: DecimalNullableFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    amortized?: DecimalNullableFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    outstanding?: DecimalNullableFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"Amortization"> | string | null
    createdAt?: DateTimeFilter<"Amortization"> | Date | string
    updatedAt?: DateTimeFilter<"Amortization"> | Date | string
    debt?: XOR<DebtScalarRelationFilter, DebtWhereInput>
  }

  export type AmortizationOrderByWithRelationInput = {
    id?: SortOrder
    debt_id?: SortOrder
    number_months?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    quota?: SortOrderInput | SortOrder
    interest?: SortOrderInput | SortOrder
    amortized?: SortOrderInput | SortOrder
    outstanding?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    debt?: DebtOrderByWithRelationInput
  }

  export type AmortizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AmortizationWhereInput | AmortizationWhereInput[]
    OR?: AmortizationWhereInput[]
    NOT?: AmortizationWhereInput | AmortizationWhereInput[]
    debt_id?: IntFilter<"Amortization"> | number
    number_months?: IntNullableFilter<"Amortization"> | number | null
    date?: StringNullableFilter<"Amortization"> | string | null
    quota?: DecimalNullableFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    interest?: DecimalNullableFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    amortized?: DecimalNullableFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    outstanding?: DecimalNullableFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"Amortization"> | string | null
    createdAt?: DateTimeFilter<"Amortization"> | Date | string
    updatedAt?: DateTimeFilter<"Amortization"> | Date | string
    debt?: XOR<DebtScalarRelationFilter, DebtWhereInput>
  }, "id">

  export type AmortizationOrderByWithAggregationInput = {
    id?: SortOrder
    debt_id?: SortOrder
    number_months?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    quota?: SortOrderInput | SortOrder
    interest?: SortOrderInput | SortOrder
    amortized?: SortOrderInput | SortOrder
    outstanding?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AmortizationCountOrderByAggregateInput
    _avg?: AmortizationAvgOrderByAggregateInput
    _max?: AmortizationMaxOrderByAggregateInput
    _min?: AmortizationMinOrderByAggregateInput
    _sum?: AmortizationSumOrderByAggregateInput
  }

  export type AmortizationScalarWhereWithAggregatesInput = {
    AND?: AmortizationScalarWhereWithAggregatesInput | AmortizationScalarWhereWithAggregatesInput[]
    OR?: AmortizationScalarWhereWithAggregatesInput[]
    NOT?: AmortizationScalarWhereWithAggregatesInput | AmortizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Amortization"> | number
    debt_id?: IntWithAggregatesFilter<"Amortization"> | number
    number_months?: IntNullableWithAggregatesFilter<"Amortization"> | number | null
    date?: StringNullableWithAggregatesFilter<"Amortization"> | string | null
    quota?: DecimalNullableWithAggregatesFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    interest?: DecimalNullableWithAggregatesFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    amortized?: DecimalNullableWithAggregatesFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    outstanding?: DecimalNullableWithAggregatesFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableWithAggregatesFilter<"Amortization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Amortization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Amortization"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    user_id?: IntFilter<"Category"> | number
    name?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    type?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    user_id?: IntFilter<"Category"> | number
    name?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    type?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    user_id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringNullableWithAggregatesFilter<"Category"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Category"> | string | null
    type?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    category_id?: IntFilter<"Transaction"> | number
    name?: StringNullableFilter<"Transaction"> | string | null
    description?: StringNullableFilter<"Transaction"> | string | null
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    date?: StringFilter<"Transaction"> | string
    time?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    date?: SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    category_id?: IntFilter<"Transaction"> | number
    name?: StringNullableFilter<"Transaction"> | string | null
    description?: StringNullableFilter<"Transaction"> | string | null
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    date?: StringFilter<"Transaction"> | string
    time?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    date?: SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    category_id?: IntWithAggregatesFilter<"Transaction"> | number
    name?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    date?: StringWithAggregatesFilter<"Transaction"> | string
    time?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type MetaWhereInput = {
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    id?: IntFilter<"Meta"> | number
    user_id?: IntFilter<"Meta"> | number
    name?: StringFilter<"Meta"> | string
    description?: StringNullableFilter<"Meta"> | string | null
    target_amount?: DecimalFilter<"Meta"> | Decimal | DecimalJsLike | number | string
    deadline?: StringNullableFilter<"Meta"> | string | null
    status?: StringFilter<"Meta"> | string
    createdAt?: DateTimeFilter<"Meta"> | Date | string
    updatedAt?: DateTimeFilter<"Meta"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trackings?: MetaTrackingListRelationFilter
  }

  export type MetaOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    target_amount?: SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trackings?: MetaTrackingOrderByRelationAggregateInput
  }

  export type MetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    user_id?: IntFilter<"Meta"> | number
    name?: StringFilter<"Meta"> | string
    description?: StringNullableFilter<"Meta"> | string | null
    target_amount?: DecimalFilter<"Meta"> | Decimal | DecimalJsLike | number | string
    deadline?: StringNullableFilter<"Meta"> | string | null
    status?: StringFilter<"Meta"> | string
    createdAt?: DateTimeFilter<"Meta"> | Date | string
    updatedAt?: DateTimeFilter<"Meta"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trackings?: MetaTrackingListRelationFilter
  }, "id">

  export type MetaOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    target_amount?: SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetaCountOrderByAggregateInput
    _avg?: MetaAvgOrderByAggregateInput
    _max?: MetaMaxOrderByAggregateInput
    _min?: MetaMinOrderByAggregateInput
    _sum?: MetaSumOrderByAggregateInput
  }

  export type MetaScalarWhereWithAggregatesInput = {
    AND?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    OR?: MetaScalarWhereWithAggregatesInput[]
    NOT?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meta"> | number
    user_id?: IntWithAggregatesFilter<"Meta"> | number
    name?: StringWithAggregatesFilter<"Meta"> | string
    description?: StringNullableWithAggregatesFilter<"Meta"> | string | null
    target_amount?: DecimalWithAggregatesFilter<"Meta"> | Decimal | DecimalJsLike | number | string
    deadline?: StringNullableWithAggregatesFilter<"Meta"> | string | null
    status?: StringWithAggregatesFilter<"Meta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
  }

  export type MetaTrackingWhereInput = {
    AND?: MetaTrackingWhereInput | MetaTrackingWhereInput[]
    OR?: MetaTrackingWhereInput[]
    NOT?: MetaTrackingWhereInput | MetaTrackingWhereInput[]
    id?: IntFilter<"MetaTracking"> | number
    meta_id?: IntFilter<"MetaTracking"> | number
    amount?: DecimalFilter<"MetaTracking"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"MetaTracking"> | string | null
    date?: StringFilter<"MetaTracking"> | string
    createdAt?: DateTimeFilter<"MetaTracking"> | Date | string
    updatedAt?: DateTimeFilter<"MetaTracking"> | Date | string
    meta?: XOR<MetaScalarRelationFilter, MetaWhereInput>
  }

  export type MetaTrackingOrderByWithRelationInput = {
    id?: SortOrder
    meta_id?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meta?: MetaOrderByWithRelationInput
  }

  export type MetaTrackingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MetaTrackingWhereInput | MetaTrackingWhereInput[]
    OR?: MetaTrackingWhereInput[]
    NOT?: MetaTrackingWhereInput | MetaTrackingWhereInput[]
    meta_id?: IntFilter<"MetaTracking"> | number
    amount?: DecimalFilter<"MetaTracking"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"MetaTracking"> | string | null
    date?: StringFilter<"MetaTracking"> | string
    createdAt?: DateTimeFilter<"MetaTracking"> | Date | string
    updatedAt?: DateTimeFilter<"MetaTracking"> | Date | string
    meta?: XOR<MetaScalarRelationFilter, MetaWhereInput>
  }, "id">

  export type MetaTrackingOrderByWithAggregationInput = {
    id?: SortOrder
    meta_id?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetaTrackingCountOrderByAggregateInput
    _avg?: MetaTrackingAvgOrderByAggregateInput
    _max?: MetaTrackingMaxOrderByAggregateInput
    _min?: MetaTrackingMinOrderByAggregateInput
    _sum?: MetaTrackingSumOrderByAggregateInput
  }

  export type MetaTrackingScalarWhereWithAggregatesInput = {
    AND?: MetaTrackingScalarWhereWithAggregatesInput | MetaTrackingScalarWhereWithAggregatesInput[]
    OR?: MetaTrackingScalarWhereWithAggregatesInput[]
    NOT?: MetaTrackingScalarWhereWithAggregatesInput | MetaTrackingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MetaTracking"> | number
    meta_id?: IntWithAggregatesFilter<"MetaTracking"> | number
    amount?: DecimalWithAggregatesFilter<"MetaTracking"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableWithAggregatesFilter<"MetaTracking"> | string | null
    date?: StringWithAggregatesFilter<"MetaTracking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MetaTracking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MetaTracking"> | Date | string
  }

  export type SalaryHistoryWhereInput = {
    AND?: SalaryHistoryWhereInput | SalaryHistoryWhereInput[]
    OR?: SalaryHistoryWhereInput[]
    NOT?: SalaryHistoryWhereInput | SalaryHistoryWhereInput[]
    id?: IntFilter<"SalaryHistory"> | number
    user_id?: IntFilter<"SalaryHistory"> | number
    salary_amount?: DecimalFilter<"SalaryHistory"> | Decimal | DecimalJsLike | number | string
    effective_date?: StringFilter<"SalaryHistory"> | string
    month_name?: StringFilter<"SalaryHistory"> | string
    description?: StringNullableFilter<"SalaryHistory"> | string | null
    createdAt?: DateTimeFilter<"SalaryHistory"> | Date | string
    updatedAt?: DateTimeFilter<"SalaryHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SalaryHistoryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    salary_amount?: SortOrder
    effective_date?: SortOrder
    month_name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SalaryHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SalaryHistoryWhereInput | SalaryHistoryWhereInput[]
    OR?: SalaryHistoryWhereInput[]
    NOT?: SalaryHistoryWhereInput | SalaryHistoryWhereInput[]
    user_id?: IntFilter<"SalaryHistory"> | number
    salary_amount?: DecimalFilter<"SalaryHistory"> | Decimal | DecimalJsLike | number | string
    effective_date?: StringFilter<"SalaryHistory"> | string
    month_name?: StringFilter<"SalaryHistory"> | string
    description?: StringNullableFilter<"SalaryHistory"> | string | null
    createdAt?: DateTimeFilter<"SalaryHistory"> | Date | string
    updatedAt?: DateTimeFilter<"SalaryHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SalaryHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    salary_amount?: SortOrder
    effective_date?: SortOrder
    month_name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalaryHistoryCountOrderByAggregateInput
    _avg?: SalaryHistoryAvgOrderByAggregateInput
    _max?: SalaryHistoryMaxOrderByAggregateInput
    _min?: SalaryHistoryMinOrderByAggregateInput
    _sum?: SalaryHistorySumOrderByAggregateInput
  }

  export type SalaryHistoryScalarWhereWithAggregatesInput = {
    AND?: SalaryHistoryScalarWhereWithAggregatesInput | SalaryHistoryScalarWhereWithAggregatesInput[]
    OR?: SalaryHistoryScalarWhereWithAggregatesInput[]
    NOT?: SalaryHistoryScalarWhereWithAggregatesInput | SalaryHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SalaryHistory"> | number
    user_id?: IntWithAggregatesFilter<"SalaryHistory"> | number
    salary_amount?: DecimalWithAggregatesFilter<"SalaryHistory"> | Decimal | DecimalJsLike | number | string
    effective_date?: StringWithAggregatesFilter<"SalaryHistory"> | string
    month_name?: StringWithAggregatesFilter<"SalaryHistory"> | string
    description?: StringNullableWithAggregatesFilter<"SalaryHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SalaryHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalaryHistory"> | Date | string
  }

  export type RoleCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    rol_id: number
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rol_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    rol_id: number
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rol_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    os?: string | null
    browser?: string | null
    isMobile?: boolean
    userAgent?: string | null
    brand?: string | null
    model?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDevicesInput
    notificationPreferences?: NotificationPreferenceCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: number
    user_id: number
    os?: string | null
    browser?: string | null
    isMobile?: boolean
    userAgent?: string | null
    brand?: string | null
    model?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationPreferences?: NotificationPreferenceUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    os?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
    notificationPreferences?: NotificationPreferenceUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    os?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationPreferences?: NotificationPreferenceUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: number
    user_id: number
    os?: string | null
    browser?: string | null
    isMobile?: boolean
    userAgent?: string | null
    brand?: string | null
    model?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    os?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    os?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferenceCreateInput = {
    pushEnabled?: boolean
    subscription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    device?: DeviceCreateNestedOneWithoutNotificationPreferencesInput
  }

  export type NotificationPreferenceUncheckedCreateInput = {
    id?: number
    device_id?: number | null
    pushEnabled?: boolean
    subscription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationPreferenceUpdateInput = {
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutNotificationPreferencesNestedInput
  }

  export type NotificationPreferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferenceCreateManyInput = {
    id?: number
    device_id?: number | null
    pushEnabled?: boolean
    subscription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationPreferenceUpdateManyMutationInput = {
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    debt?: DebtCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    user_id: number
    title: string
    message: string
    isRead?: boolean
    debt_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    debt?: DebtUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    debt_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    user_id: number
    title: string
    message: string
    isRead?: boolean
    debt_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    debt_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateInput = {
    code: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
    user: UserCreateNestedOneWithoutVerificationCodesInput
  }

  export type VerificationCodeUncheckedCreateInput = {
    id?: number
    code: string
    userId: number
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type VerificationCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutVerificationCodesNestedInput
  }

  export type VerificationCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationCodeCreateManyInput = {
    id?: number
    code: string
    userId: number
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type VerificationCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DebtCreateInput = {
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    duration_months?: number | null
    method?: string | null
    start_date?: string | null
    end_date?: string | null
    status?: string | null
    notifyEnabled?: boolean | null
    daysBeforeNotify?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDebtsInput
    amortizations?: AmortizationCreateNestedManyWithoutDebtInput
    notifications?: NotificationCreateNestedManyWithoutDebtInput
  }

  export type DebtUncheckedCreateInput = {
    id?: number
    user_id: number
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    duration_months?: number | null
    method?: string | null
    start_date?: string | null
    end_date?: string | null
    status?: string | null
    notifyEnabled?: boolean | null
    daysBeforeNotify?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amortizations?: AmortizationUncheckedCreateNestedManyWithoutDebtInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutDebtInput
  }

  export type DebtUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_months?: NullableIntFieldUpdateOperationsInput | number | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifyEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daysBeforeNotify?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDebtsNestedInput
    amortizations?: AmortizationUpdateManyWithoutDebtNestedInput
    notifications?: NotificationUpdateManyWithoutDebtNestedInput
  }

  export type DebtUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_months?: NullableIntFieldUpdateOperationsInput | number | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifyEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daysBeforeNotify?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amortizations?: AmortizationUncheckedUpdateManyWithoutDebtNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutDebtNestedInput
  }

  export type DebtCreateManyInput = {
    id?: number
    user_id: number
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    duration_months?: number | null
    method?: string | null
    start_date?: string | null
    end_date?: string | null
    status?: string | null
    notifyEnabled?: boolean | null
    daysBeforeNotify?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_months?: NullableIntFieldUpdateOperationsInput | number | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifyEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daysBeforeNotify?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_months?: NullableIntFieldUpdateOperationsInput | number | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifyEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daysBeforeNotify?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmortizationCreateInput = {
    number_months?: number | null
    date?: string | null
    quota?: Decimal | DecimalJsLike | number | string | null
    interest?: Decimal | DecimalJsLike | number | string | null
    amortized?: Decimal | DecimalJsLike | number | string | null
    outstanding?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    debt: DebtCreateNestedOneWithoutAmortizationsInput
  }

  export type AmortizationUncheckedCreateInput = {
    id?: number
    debt_id: number
    number_months?: number | null
    date?: string | null
    quota?: Decimal | DecimalJsLike | number | string | null
    interest?: Decimal | DecimalJsLike | number | string | null
    amortized?: Decimal | DecimalJsLike | number | string | null
    outstanding?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmortizationUpdateInput = {
    number_months?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    quota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amortized?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    outstanding?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debt?: DebtUpdateOneRequiredWithoutAmortizationsNestedInput
  }

  export type AmortizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    debt_id?: IntFieldUpdateOperationsInput | number
    number_months?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    quota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amortized?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    outstanding?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmortizationCreateManyInput = {
    id?: number
    debt_id: number
    number_months?: number | null
    date?: string | null
    quota?: Decimal | DecimalJsLike | number | string | null
    interest?: Decimal | DecimalJsLike | number | string | null
    amortized?: Decimal | DecimalJsLike | number | string | null
    outstanding?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmortizationUpdateManyMutationInput = {
    number_months?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    quota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amortized?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    outstanding?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmortizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    debt_id?: IntFieldUpdateOperationsInput | number
    number_months?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    quota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amortized?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    outstanding?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name?: string | null
    icon?: string | null
    type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    user_id: number
    name?: string | null
    icon?: string | null
    type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    user_id: number
    name?: string | null
    icon?: string | null
    type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    name?: string | null
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    date: string
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    category_id: number
    name?: string | null
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    date: string
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    category_id: number
    name?: string | null
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    date: string
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaCreateInput = {
    name: string
    description?: string | null
    target_amount: Decimal | DecimalJsLike | number | string
    deadline?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMetasInput
    trackings?: MetaTrackingCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    description?: string | null
    target_amount: Decimal | DecimalJsLike | number | string
    deadline?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trackings?: MetaTrackingUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMetasNestedInput
    trackings?: MetaTrackingUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackings?: MetaTrackingUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type MetaCreateManyInput = {
    id?: number
    user_id: number
    name: string
    description?: string | null
    target_amount: Decimal | DecimalJsLike | number | string
    deadline?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaTrackingCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meta: MetaCreateNestedOneWithoutTrackingsInput
  }

  export type MetaTrackingUncheckedCreateInput = {
    id?: number
    meta_id: number
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaTrackingUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MetaUpdateOneRequiredWithoutTrackingsNestedInput
  }

  export type MetaTrackingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meta_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaTrackingCreateManyInput = {
    id?: number
    meta_id: number
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaTrackingUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaTrackingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meta_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryHistoryCreateInput = {
    salary_amount: Decimal | DecimalJsLike | number | string
    effective_date: string
    month_name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSalary_historyInput
  }

  export type SalaryHistoryUncheckedCreateInput = {
    id?: number
    user_id: number
    salary_amount: Decimal | DecimalJsLike | number | string
    effective_date: string
    month_name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryHistoryUpdateInput = {
    salary_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    effective_date?: StringFieldUpdateOperationsInput | string
    month_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSalary_historyNestedInput
  }

  export type SalaryHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    salary_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    effective_date?: StringFieldUpdateOperationsInput | string
    month_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryHistoryCreateManyInput = {
    id?: number
    user_id: number
    salary_amount: Decimal | DecimalJsLike | number | string
    effective_date: string
    month_name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryHistoryUpdateManyMutationInput = {
    salary_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    effective_date?: StringFieldUpdateOperationsInput | string
    month_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    salary_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    effective_date?: StringFieldUpdateOperationsInput | string
    month_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type DebtListRelationFilter = {
    every?: DebtWhereInput
    some?: DebtWhereInput
    none?: DebtWhereInput
  }

  export type MetaListRelationFilter = {
    every?: MetaWhereInput
    some?: MetaWhereInput
    none?: MetaWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type VerificationCodeListRelationFilter = {
    every?: VerificationCodeWhereInput
    some?: VerificationCodeWhereInput
    none?: VerificationCodeWhereInput
  }

  export type SalaryHistoryListRelationFilter = {
    every?: SalaryHistoryWhereInput
    some?: SalaryHistoryWhereInput
    none?: SalaryHistoryWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DebtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalaryHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    rol_id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    firebaseUid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    rol_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    rol_id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    firebaseUid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    rol_id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    firebaseUid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    rol_id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotificationPreferenceListRelationFilter = {
    every?: NotificationPreferenceWhereInput
    some?: NotificationPreferenceWhereInput
    none?: NotificationPreferenceWhereInput
  }

  export type NotificationPreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    os?: SortOrder
    browser?: SortOrder
    isMobile?: SortOrder
    userAgent?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    os?: SortOrder
    browser?: SortOrder
    isMobile?: SortOrder
    userAgent?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    os?: SortOrder
    browser?: SortOrder
    isMobile?: SortOrder
    userAgent?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DeviceNullableScalarRelationFilter = {
    is?: DeviceWhereInput | null
    isNot?: DeviceWhereInput | null
  }

  export type NotificationPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    pushEnabled?: SortOrder
    subscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationPreferenceAvgOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
  }

  export type NotificationPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    pushEnabled?: SortOrder
    subscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    pushEnabled?: SortOrder
    subscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationPreferenceSumOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DebtNullableScalarRelationFilter = {
    is?: DebtWhereInput | null
    isNot?: DebtWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    debt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    debt_id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    debt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    debt_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    debt_id?: SortOrder
  }

  export type VerificationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
  }

  export type VerificationCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VerificationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
  }

  export type VerificationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
  }

  export type VerificationCodeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AmortizationListRelationFilter = {
    every?: AmortizationWhereInput
    some?: AmortizationWhereInput
    none?: AmortizationWhereInput
  }

  export type AmortizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DebtCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    interest_rate?: SortOrder
    duration_months?: SortOrder
    method?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    notifyEnabled?: SortOrder
    daysBeforeNotify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebtAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    interest_rate?: SortOrder
    duration_months?: SortOrder
    daysBeforeNotify?: SortOrder
  }

  export type DebtMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    interest_rate?: SortOrder
    duration_months?: SortOrder
    method?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    notifyEnabled?: SortOrder
    daysBeforeNotify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebtMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    interest_rate?: SortOrder
    duration_months?: SortOrder
    method?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    notifyEnabled?: SortOrder
    daysBeforeNotify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebtSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    interest_rate?: SortOrder
    duration_months?: SortOrder
    daysBeforeNotify?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DebtScalarRelationFilter = {
    is?: DebtWhereInput
    isNot?: DebtWhereInput
  }

  export type AmortizationCountOrderByAggregateInput = {
    id?: SortOrder
    debt_id?: SortOrder
    number_months?: SortOrder
    date?: SortOrder
    quota?: SortOrder
    interest?: SortOrder
    amortized?: SortOrder
    outstanding?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmortizationAvgOrderByAggregateInput = {
    id?: SortOrder
    debt_id?: SortOrder
    number_months?: SortOrder
    quota?: SortOrder
    interest?: SortOrder
    amortized?: SortOrder
    outstanding?: SortOrder
  }

  export type AmortizationMaxOrderByAggregateInput = {
    id?: SortOrder
    debt_id?: SortOrder
    number_months?: SortOrder
    date?: SortOrder
    quota?: SortOrder
    interest?: SortOrder
    amortized?: SortOrder
    outstanding?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmortizationMinOrderByAggregateInput = {
    id?: SortOrder
    debt_id?: SortOrder
    number_months?: SortOrder
    date?: SortOrder
    quota?: SortOrder
    interest?: SortOrder
    amortized?: SortOrder
    outstanding?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmortizationSumOrderByAggregateInput = {
    id?: SortOrder
    debt_id?: SortOrder
    number_months?: SortOrder
    quota?: SortOrder
    interest?: SortOrder
    amortized?: SortOrder
    outstanding?: SortOrder
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type MetaTrackingListRelationFilter = {
    every?: MetaTrackingWhereInput
    some?: MetaTrackingWhereInput
    none?: MetaTrackingWhereInput
  }

  export type MetaTrackingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetaCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    target_amount?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    target_amount?: SortOrder
  }

  export type MetaMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    target_amount?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    target_amount?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    target_amount?: SortOrder
  }

  export type MetaScalarRelationFilter = {
    is?: MetaWhereInput
    isNot?: MetaWhereInput
  }

  export type MetaTrackingCountOrderByAggregateInput = {
    id?: SortOrder
    meta_id?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaTrackingAvgOrderByAggregateInput = {
    id?: SortOrder
    meta_id?: SortOrder
    amount?: SortOrder
  }

  export type MetaTrackingMaxOrderByAggregateInput = {
    id?: SortOrder
    meta_id?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaTrackingMinOrderByAggregateInput = {
    id?: SortOrder
    meta_id?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaTrackingSumOrderByAggregateInput = {
    id?: SortOrder
    meta_id?: SortOrder
    amount?: SortOrder
  }

  export type SalaryHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    salary_amount?: SortOrder
    effective_date?: SortOrder
    month_name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    salary_amount?: SortOrder
  }

  export type SalaryHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    salary_amount?: SortOrder
    effective_date?: SortOrder
    month_name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    salary_amount?: SortOrder
    effective_date?: SortOrder
    month_name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryHistorySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    salary_amount?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type DebtCreateNestedManyWithoutUserInput = {
    create?: XOR<DebtCreateWithoutUserInput, DebtUncheckedCreateWithoutUserInput> | DebtCreateWithoutUserInput[] | DebtUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutUserInput | DebtCreateOrConnectWithoutUserInput[]
    createMany?: DebtCreateManyUserInputEnvelope
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
  }

  export type MetaCreateNestedManyWithoutUserInput = {
    create?: XOR<MetaCreateWithoutUserInput, MetaUncheckedCreateWithoutUserInput> | MetaCreateWithoutUserInput[] | MetaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetaCreateOrConnectWithoutUserInput | MetaCreateOrConnectWithoutUserInput[]
    createMany?: MetaCreateManyUserInputEnvelope
    connect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type VerificationCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
  }

  export type SalaryHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<SalaryHistoryCreateWithoutUserInput, SalaryHistoryUncheckedCreateWithoutUserInput> | SalaryHistoryCreateWithoutUserInput[] | SalaryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalaryHistoryCreateOrConnectWithoutUserInput | SalaryHistoryCreateOrConnectWithoutUserInput[]
    createMany?: SalaryHistoryCreateManyUserInputEnvelope
    connect?: SalaryHistoryWhereUniqueInput | SalaryHistoryWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type DebtUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DebtCreateWithoutUserInput, DebtUncheckedCreateWithoutUserInput> | DebtCreateWithoutUserInput[] | DebtUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutUserInput | DebtCreateOrConnectWithoutUserInput[]
    createMany?: DebtCreateManyUserInputEnvelope
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
  }

  export type MetaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MetaCreateWithoutUserInput, MetaUncheckedCreateWithoutUserInput> | MetaCreateWithoutUserInput[] | MetaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetaCreateOrConnectWithoutUserInput | MetaCreateOrConnectWithoutUserInput[]
    createMany?: MetaCreateManyUserInputEnvelope
    connect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type VerificationCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
  }

  export type SalaryHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SalaryHistoryCreateWithoutUserInput, SalaryHistoryUncheckedCreateWithoutUserInput> | SalaryHistoryCreateWithoutUserInput[] | SalaryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalaryHistoryCreateOrConnectWithoutUserInput | SalaryHistoryCreateOrConnectWithoutUserInput[]
    createMany?: SalaryHistoryCreateManyUserInputEnvelope
    connect?: SalaryHistoryWhereUniqueInput | SalaryHistoryWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type CategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type DebtUpdateManyWithoutUserNestedInput = {
    create?: XOR<DebtCreateWithoutUserInput, DebtUncheckedCreateWithoutUserInput> | DebtCreateWithoutUserInput[] | DebtUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutUserInput | DebtCreateOrConnectWithoutUserInput[]
    upsert?: DebtUpsertWithWhereUniqueWithoutUserInput | DebtUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DebtCreateManyUserInputEnvelope
    set?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    disconnect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    delete?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    update?: DebtUpdateWithWhereUniqueWithoutUserInput | DebtUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DebtUpdateManyWithWhereWithoutUserInput | DebtUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DebtScalarWhereInput | DebtScalarWhereInput[]
  }

  export type MetaUpdateManyWithoutUserNestedInput = {
    create?: XOR<MetaCreateWithoutUserInput, MetaUncheckedCreateWithoutUserInput> | MetaCreateWithoutUserInput[] | MetaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetaCreateOrConnectWithoutUserInput | MetaCreateOrConnectWithoutUserInput[]
    upsert?: MetaUpsertWithWhereUniqueWithoutUserInput | MetaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MetaCreateManyUserInputEnvelope
    set?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    disconnect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    delete?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    connect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    update?: MetaUpdateWithWhereUniqueWithoutUserInput | MetaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MetaUpdateManyWithWhereWithoutUserInput | MetaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MetaScalarWhereInput | MetaScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type VerificationCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    upsert?: VerificationCodeUpsertWithWhereUniqueWithoutUserInput | VerificationCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    set?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    disconnect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    delete?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    update?: VerificationCodeUpdateWithWhereUniqueWithoutUserInput | VerificationCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationCodeUpdateManyWithWhereWithoutUserInput | VerificationCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
  }

  export type SalaryHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<SalaryHistoryCreateWithoutUserInput, SalaryHistoryUncheckedCreateWithoutUserInput> | SalaryHistoryCreateWithoutUserInput[] | SalaryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalaryHistoryCreateOrConnectWithoutUserInput | SalaryHistoryCreateOrConnectWithoutUserInput[]
    upsert?: SalaryHistoryUpsertWithWhereUniqueWithoutUserInput | SalaryHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SalaryHistoryCreateManyUserInputEnvelope
    set?: SalaryHistoryWhereUniqueInput | SalaryHistoryWhereUniqueInput[]
    disconnect?: SalaryHistoryWhereUniqueInput | SalaryHistoryWhereUniqueInput[]
    delete?: SalaryHistoryWhereUniqueInput | SalaryHistoryWhereUniqueInput[]
    connect?: SalaryHistoryWhereUniqueInput | SalaryHistoryWhereUniqueInput[]
    update?: SalaryHistoryUpdateWithWhereUniqueWithoutUserInput | SalaryHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SalaryHistoryUpdateManyWithWhereWithoutUserInput | SalaryHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SalaryHistoryScalarWhereInput | SalaryHistoryScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type DebtUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DebtCreateWithoutUserInput, DebtUncheckedCreateWithoutUserInput> | DebtCreateWithoutUserInput[] | DebtUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutUserInput | DebtCreateOrConnectWithoutUserInput[]
    upsert?: DebtUpsertWithWhereUniqueWithoutUserInput | DebtUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DebtCreateManyUserInputEnvelope
    set?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    disconnect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    delete?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    update?: DebtUpdateWithWhereUniqueWithoutUserInput | DebtUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DebtUpdateManyWithWhereWithoutUserInput | DebtUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DebtScalarWhereInput | DebtScalarWhereInput[]
  }

  export type MetaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MetaCreateWithoutUserInput, MetaUncheckedCreateWithoutUserInput> | MetaCreateWithoutUserInput[] | MetaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetaCreateOrConnectWithoutUserInput | MetaCreateOrConnectWithoutUserInput[]
    upsert?: MetaUpsertWithWhereUniqueWithoutUserInput | MetaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MetaCreateManyUserInputEnvelope
    set?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    disconnect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    delete?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    connect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    update?: MetaUpdateWithWhereUniqueWithoutUserInput | MetaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MetaUpdateManyWithWhereWithoutUserInput | MetaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MetaScalarWhereInput | MetaScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type VerificationCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    upsert?: VerificationCodeUpsertWithWhereUniqueWithoutUserInput | VerificationCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    set?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    disconnect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    delete?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    update?: VerificationCodeUpdateWithWhereUniqueWithoutUserInput | VerificationCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationCodeUpdateManyWithWhereWithoutUserInput | VerificationCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
  }

  export type SalaryHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SalaryHistoryCreateWithoutUserInput, SalaryHistoryUncheckedCreateWithoutUserInput> | SalaryHistoryCreateWithoutUserInput[] | SalaryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalaryHistoryCreateOrConnectWithoutUserInput | SalaryHistoryCreateOrConnectWithoutUserInput[]
    upsert?: SalaryHistoryUpsertWithWhereUniqueWithoutUserInput | SalaryHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SalaryHistoryCreateManyUserInputEnvelope
    set?: SalaryHistoryWhereUniqueInput | SalaryHistoryWhereUniqueInput[]
    disconnect?: SalaryHistoryWhereUniqueInput | SalaryHistoryWhereUniqueInput[]
    delete?: SalaryHistoryWhereUniqueInput | SalaryHistoryWhereUniqueInput[]
    connect?: SalaryHistoryWhereUniqueInput | SalaryHistoryWhereUniqueInput[]
    update?: SalaryHistoryUpdateWithWhereUniqueWithoutUserInput | SalaryHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SalaryHistoryUpdateManyWithWhereWithoutUserInput | SalaryHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SalaryHistoryScalarWhereInput | SalaryHistoryScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationPreferenceCreateNestedManyWithoutDeviceInput = {
    create?: XOR<NotificationPreferenceCreateWithoutDeviceInput, NotificationPreferenceUncheckedCreateWithoutDeviceInput> | NotificationPreferenceCreateWithoutDeviceInput[] | NotificationPreferenceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: NotificationPreferenceCreateOrConnectWithoutDeviceInput | NotificationPreferenceCreateOrConnectWithoutDeviceInput[]
    createMany?: NotificationPreferenceCreateManyDeviceInputEnvelope
    connect?: NotificationPreferenceWhereUniqueInput | NotificationPreferenceWhereUniqueInput[]
  }

  export type NotificationPreferenceUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<NotificationPreferenceCreateWithoutDeviceInput, NotificationPreferenceUncheckedCreateWithoutDeviceInput> | NotificationPreferenceCreateWithoutDeviceInput[] | NotificationPreferenceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: NotificationPreferenceCreateOrConnectWithoutDeviceInput | NotificationPreferenceCreateOrConnectWithoutDeviceInput[]
    createMany?: NotificationPreferenceCreateManyDeviceInputEnvelope
    connect?: NotificationPreferenceWhereUniqueInput | NotificationPreferenceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type NotificationPreferenceUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<NotificationPreferenceCreateWithoutDeviceInput, NotificationPreferenceUncheckedCreateWithoutDeviceInput> | NotificationPreferenceCreateWithoutDeviceInput[] | NotificationPreferenceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: NotificationPreferenceCreateOrConnectWithoutDeviceInput | NotificationPreferenceCreateOrConnectWithoutDeviceInput[]
    upsert?: NotificationPreferenceUpsertWithWhereUniqueWithoutDeviceInput | NotificationPreferenceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: NotificationPreferenceCreateManyDeviceInputEnvelope
    set?: NotificationPreferenceWhereUniqueInput | NotificationPreferenceWhereUniqueInput[]
    disconnect?: NotificationPreferenceWhereUniqueInput | NotificationPreferenceWhereUniqueInput[]
    delete?: NotificationPreferenceWhereUniqueInput | NotificationPreferenceWhereUniqueInput[]
    connect?: NotificationPreferenceWhereUniqueInput | NotificationPreferenceWhereUniqueInput[]
    update?: NotificationPreferenceUpdateWithWhereUniqueWithoutDeviceInput | NotificationPreferenceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: NotificationPreferenceUpdateManyWithWhereWithoutDeviceInput | NotificationPreferenceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: NotificationPreferenceScalarWhereInput | NotificationPreferenceScalarWhereInput[]
  }

  export type NotificationPreferenceUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<NotificationPreferenceCreateWithoutDeviceInput, NotificationPreferenceUncheckedCreateWithoutDeviceInput> | NotificationPreferenceCreateWithoutDeviceInput[] | NotificationPreferenceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: NotificationPreferenceCreateOrConnectWithoutDeviceInput | NotificationPreferenceCreateOrConnectWithoutDeviceInput[]
    upsert?: NotificationPreferenceUpsertWithWhereUniqueWithoutDeviceInput | NotificationPreferenceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: NotificationPreferenceCreateManyDeviceInputEnvelope
    set?: NotificationPreferenceWhereUniqueInput | NotificationPreferenceWhereUniqueInput[]
    disconnect?: NotificationPreferenceWhereUniqueInput | NotificationPreferenceWhereUniqueInput[]
    delete?: NotificationPreferenceWhereUniqueInput | NotificationPreferenceWhereUniqueInput[]
    connect?: NotificationPreferenceWhereUniqueInput | NotificationPreferenceWhereUniqueInput[]
    update?: NotificationPreferenceUpdateWithWhereUniqueWithoutDeviceInput | NotificationPreferenceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: NotificationPreferenceUpdateManyWithWhereWithoutDeviceInput | NotificationPreferenceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: NotificationPreferenceScalarWhereInput | NotificationPreferenceScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutNotificationPreferencesInput = {
    create?: XOR<DeviceCreateWithoutNotificationPreferencesInput, DeviceUncheckedCreateWithoutNotificationPreferencesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutNotificationPreferencesInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneWithoutNotificationPreferencesNestedInput = {
    create?: XOR<DeviceCreateWithoutNotificationPreferencesInput, DeviceUncheckedCreateWithoutNotificationPreferencesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutNotificationPreferencesInput
    upsert?: DeviceUpsertWithoutNotificationPreferencesInput
    disconnect?: DeviceWhereInput | boolean
    delete?: DeviceWhereInput | boolean
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutNotificationPreferencesInput, DeviceUpdateWithoutNotificationPreferencesInput>, DeviceUncheckedUpdateWithoutNotificationPreferencesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type DebtCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<DebtCreateWithoutNotificationsInput, DebtUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: DebtCreateOrConnectWithoutNotificationsInput
    connect?: DebtWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type DebtUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<DebtCreateWithoutNotificationsInput, DebtUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: DebtCreateOrConnectWithoutNotificationsInput
    upsert?: DebtUpsertWithoutNotificationsInput
    disconnect?: DebtWhereInput | boolean
    delete?: DebtWhereInput | boolean
    connect?: DebtWhereUniqueInput
    update?: XOR<XOR<DebtUpdateToOneWithWhereWithoutNotificationsInput, DebtUpdateWithoutNotificationsInput>, DebtUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutVerificationCodesInput = {
    create?: XOR<UserCreateWithoutVerificationCodesInput, UserUncheckedCreateWithoutVerificationCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationCodesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVerificationCodesNestedInput = {
    create?: XOR<UserCreateWithoutVerificationCodesInput, UserUncheckedCreateWithoutVerificationCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationCodesInput
    upsert?: UserUpsertWithoutVerificationCodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationCodesInput, UserUpdateWithoutVerificationCodesInput>, UserUncheckedUpdateWithoutVerificationCodesInput>
  }

  export type UserCreateNestedOneWithoutDebtsInput = {
    create?: XOR<UserCreateWithoutDebtsInput, UserUncheckedCreateWithoutDebtsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDebtsInput
    connect?: UserWhereUniqueInput
  }

  export type AmortizationCreateNestedManyWithoutDebtInput = {
    create?: XOR<AmortizationCreateWithoutDebtInput, AmortizationUncheckedCreateWithoutDebtInput> | AmortizationCreateWithoutDebtInput[] | AmortizationUncheckedCreateWithoutDebtInput[]
    connectOrCreate?: AmortizationCreateOrConnectWithoutDebtInput | AmortizationCreateOrConnectWithoutDebtInput[]
    createMany?: AmortizationCreateManyDebtInputEnvelope
    connect?: AmortizationWhereUniqueInput | AmortizationWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutDebtInput = {
    create?: XOR<NotificationCreateWithoutDebtInput, NotificationUncheckedCreateWithoutDebtInput> | NotificationCreateWithoutDebtInput[] | NotificationUncheckedCreateWithoutDebtInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDebtInput | NotificationCreateOrConnectWithoutDebtInput[]
    createMany?: NotificationCreateManyDebtInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AmortizationUncheckedCreateNestedManyWithoutDebtInput = {
    create?: XOR<AmortizationCreateWithoutDebtInput, AmortizationUncheckedCreateWithoutDebtInput> | AmortizationCreateWithoutDebtInput[] | AmortizationUncheckedCreateWithoutDebtInput[]
    connectOrCreate?: AmortizationCreateOrConnectWithoutDebtInput | AmortizationCreateOrConnectWithoutDebtInput[]
    createMany?: AmortizationCreateManyDebtInputEnvelope
    connect?: AmortizationWhereUniqueInput | AmortizationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutDebtInput = {
    create?: XOR<NotificationCreateWithoutDebtInput, NotificationUncheckedCreateWithoutDebtInput> | NotificationCreateWithoutDebtInput[] | NotificationUncheckedCreateWithoutDebtInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDebtInput | NotificationCreateOrConnectWithoutDebtInput[]
    createMany?: NotificationCreateManyDebtInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutDebtsNestedInput = {
    create?: XOR<UserCreateWithoutDebtsInput, UserUncheckedCreateWithoutDebtsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDebtsInput
    upsert?: UserUpsertWithoutDebtsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDebtsInput, UserUpdateWithoutDebtsInput>, UserUncheckedUpdateWithoutDebtsInput>
  }

  export type AmortizationUpdateManyWithoutDebtNestedInput = {
    create?: XOR<AmortizationCreateWithoutDebtInput, AmortizationUncheckedCreateWithoutDebtInput> | AmortizationCreateWithoutDebtInput[] | AmortizationUncheckedCreateWithoutDebtInput[]
    connectOrCreate?: AmortizationCreateOrConnectWithoutDebtInput | AmortizationCreateOrConnectWithoutDebtInput[]
    upsert?: AmortizationUpsertWithWhereUniqueWithoutDebtInput | AmortizationUpsertWithWhereUniqueWithoutDebtInput[]
    createMany?: AmortizationCreateManyDebtInputEnvelope
    set?: AmortizationWhereUniqueInput | AmortizationWhereUniqueInput[]
    disconnect?: AmortizationWhereUniqueInput | AmortizationWhereUniqueInput[]
    delete?: AmortizationWhereUniqueInput | AmortizationWhereUniqueInput[]
    connect?: AmortizationWhereUniqueInput | AmortizationWhereUniqueInput[]
    update?: AmortizationUpdateWithWhereUniqueWithoutDebtInput | AmortizationUpdateWithWhereUniqueWithoutDebtInput[]
    updateMany?: AmortizationUpdateManyWithWhereWithoutDebtInput | AmortizationUpdateManyWithWhereWithoutDebtInput[]
    deleteMany?: AmortizationScalarWhereInput | AmortizationScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutDebtNestedInput = {
    create?: XOR<NotificationCreateWithoutDebtInput, NotificationUncheckedCreateWithoutDebtInput> | NotificationCreateWithoutDebtInput[] | NotificationUncheckedCreateWithoutDebtInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDebtInput | NotificationCreateOrConnectWithoutDebtInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutDebtInput | NotificationUpsertWithWhereUniqueWithoutDebtInput[]
    createMany?: NotificationCreateManyDebtInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutDebtInput | NotificationUpdateWithWhereUniqueWithoutDebtInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutDebtInput | NotificationUpdateManyWithWhereWithoutDebtInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AmortizationUncheckedUpdateManyWithoutDebtNestedInput = {
    create?: XOR<AmortizationCreateWithoutDebtInput, AmortizationUncheckedCreateWithoutDebtInput> | AmortizationCreateWithoutDebtInput[] | AmortizationUncheckedCreateWithoutDebtInput[]
    connectOrCreate?: AmortizationCreateOrConnectWithoutDebtInput | AmortizationCreateOrConnectWithoutDebtInput[]
    upsert?: AmortizationUpsertWithWhereUniqueWithoutDebtInput | AmortizationUpsertWithWhereUniqueWithoutDebtInput[]
    createMany?: AmortizationCreateManyDebtInputEnvelope
    set?: AmortizationWhereUniqueInput | AmortizationWhereUniqueInput[]
    disconnect?: AmortizationWhereUniqueInput | AmortizationWhereUniqueInput[]
    delete?: AmortizationWhereUniqueInput | AmortizationWhereUniqueInput[]
    connect?: AmortizationWhereUniqueInput | AmortizationWhereUniqueInput[]
    update?: AmortizationUpdateWithWhereUniqueWithoutDebtInput | AmortizationUpdateWithWhereUniqueWithoutDebtInput[]
    updateMany?: AmortizationUpdateManyWithWhereWithoutDebtInput | AmortizationUpdateManyWithWhereWithoutDebtInput[]
    deleteMany?: AmortizationScalarWhereInput | AmortizationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutDebtNestedInput = {
    create?: XOR<NotificationCreateWithoutDebtInput, NotificationUncheckedCreateWithoutDebtInput> | NotificationCreateWithoutDebtInput[] | NotificationUncheckedCreateWithoutDebtInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDebtInput | NotificationCreateOrConnectWithoutDebtInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutDebtInput | NotificationUpsertWithWhereUniqueWithoutDebtInput[]
    createMany?: NotificationCreateManyDebtInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutDebtInput | NotificationUpdateWithWhereUniqueWithoutDebtInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutDebtInput | NotificationUpdateManyWithWhereWithoutDebtInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type DebtCreateNestedOneWithoutAmortizationsInput = {
    create?: XOR<DebtCreateWithoutAmortizationsInput, DebtUncheckedCreateWithoutAmortizationsInput>
    connectOrCreate?: DebtCreateOrConnectWithoutAmortizationsInput
    connect?: DebtWhereUniqueInput
  }

  export type DebtUpdateOneRequiredWithoutAmortizationsNestedInput = {
    create?: XOR<DebtCreateWithoutAmortizationsInput, DebtUncheckedCreateWithoutAmortizationsInput>
    connectOrCreate?: DebtCreateOrConnectWithoutAmortizationsInput
    upsert?: DebtUpsertWithoutAmortizationsInput
    connect?: DebtWhereUniqueInput
    update?: XOR<XOR<DebtUpdateToOneWithWhereWithoutAmortizationsInput, DebtUpdateWithoutAmortizationsInput>, DebtUncheckedUpdateWithoutAmortizationsInput>
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CategoryUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    upsert?: CategoryUpsertWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTransactionsInput, CategoryUpdateWithoutTransactionsInput>, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutMetasInput = {
    create?: XOR<UserCreateWithoutMetasInput, UserUncheckedCreateWithoutMetasInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetasInput
    connect?: UserWhereUniqueInput
  }

  export type MetaTrackingCreateNestedManyWithoutMetaInput = {
    create?: XOR<MetaTrackingCreateWithoutMetaInput, MetaTrackingUncheckedCreateWithoutMetaInput> | MetaTrackingCreateWithoutMetaInput[] | MetaTrackingUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: MetaTrackingCreateOrConnectWithoutMetaInput | MetaTrackingCreateOrConnectWithoutMetaInput[]
    createMany?: MetaTrackingCreateManyMetaInputEnvelope
    connect?: MetaTrackingWhereUniqueInput | MetaTrackingWhereUniqueInput[]
  }

  export type MetaTrackingUncheckedCreateNestedManyWithoutMetaInput = {
    create?: XOR<MetaTrackingCreateWithoutMetaInput, MetaTrackingUncheckedCreateWithoutMetaInput> | MetaTrackingCreateWithoutMetaInput[] | MetaTrackingUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: MetaTrackingCreateOrConnectWithoutMetaInput | MetaTrackingCreateOrConnectWithoutMetaInput[]
    createMany?: MetaTrackingCreateManyMetaInputEnvelope
    connect?: MetaTrackingWhereUniqueInput | MetaTrackingWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMetasNestedInput = {
    create?: XOR<UserCreateWithoutMetasInput, UserUncheckedCreateWithoutMetasInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetasInput
    upsert?: UserUpsertWithoutMetasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMetasInput, UserUpdateWithoutMetasInput>, UserUncheckedUpdateWithoutMetasInput>
  }

  export type MetaTrackingUpdateManyWithoutMetaNestedInput = {
    create?: XOR<MetaTrackingCreateWithoutMetaInput, MetaTrackingUncheckedCreateWithoutMetaInput> | MetaTrackingCreateWithoutMetaInput[] | MetaTrackingUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: MetaTrackingCreateOrConnectWithoutMetaInput | MetaTrackingCreateOrConnectWithoutMetaInput[]
    upsert?: MetaTrackingUpsertWithWhereUniqueWithoutMetaInput | MetaTrackingUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: MetaTrackingCreateManyMetaInputEnvelope
    set?: MetaTrackingWhereUniqueInput | MetaTrackingWhereUniqueInput[]
    disconnect?: MetaTrackingWhereUniqueInput | MetaTrackingWhereUniqueInput[]
    delete?: MetaTrackingWhereUniqueInput | MetaTrackingWhereUniqueInput[]
    connect?: MetaTrackingWhereUniqueInput | MetaTrackingWhereUniqueInput[]
    update?: MetaTrackingUpdateWithWhereUniqueWithoutMetaInput | MetaTrackingUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: MetaTrackingUpdateManyWithWhereWithoutMetaInput | MetaTrackingUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: MetaTrackingScalarWhereInput | MetaTrackingScalarWhereInput[]
  }

  export type MetaTrackingUncheckedUpdateManyWithoutMetaNestedInput = {
    create?: XOR<MetaTrackingCreateWithoutMetaInput, MetaTrackingUncheckedCreateWithoutMetaInput> | MetaTrackingCreateWithoutMetaInput[] | MetaTrackingUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: MetaTrackingCreateOrConnectWithoutMetaInput | MetaTrackingCreateOrConnectWithoutMetaInput[]
    upsert?: MetaTrackingUpsertWithWhereUniqueWithoutMetaInput | MetaTrackingUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: MetaTrackingCreateManyMetaInputEnvelope
    set?: MetaTrackingWhereUniqueInput | MetaTrackingWhereUniqueInput[]
    disconnect?: MetaTrackingWhereUniqueInput | MetaTrackingWhereUniqueInput[]
    delete?: MetaTrackingWhereUniqueInput | MetaTrackingWhereUniqueInput[]
    connect?: MetaTrackingWhereUniqueInput | MetaTrackingWhereUniqueInput[]
    update?: MetaTrackingUpdateWithWhereUniqueWithoutMetaInput | MetaTrackingUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: MetaTrackingUpdateManyWithWhereWithoutMetaInput | MetaTrackingUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: MetaTrackingScalarWhereInput | MetaTrackingScalarWhereInput[]
  }

  export type MetaCreateNestedOneWithoutTrackingsInput = {
    create?: XOR<MetaCreateWithoutTrackingsInput, MetaUncheckedCreateWithoutTrackingsInput>
    connectOrCreate?: MetaCreateOrConnectWithoutTrackingsInput
    connect?: MetaWhereUniqueInput
  }

  export type MetaUpdateOneRequiredWithoutTrackingsNestedInput = {
    create?: XOR<MetaCreateWithoutTrackingsInput, MetaUncheckedCreateWithoutTrackingsInput>
    connectOrCreate?: MetaCreateOrConnectWithoutTrackingsInput
    upsert?: MetaUpsertWithoutTrackingsInput
    connect?: MetaWhereUniqueInput
    update?: XOR<XOR<MetaUpdateToOneWithWhereWithoutTrackingsInput, MetaUpdateWithoutTrackingsInput>, MetaUncheckedUpdateWithoutTrackingsInput>
  }

  export type UserCreateNestedOneWithoutSalary_historyInput = {
    create?: XOR<UserCreateWithoutSalary_historyInput, UserUncheckedCreateWithoutSalary_historyInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalary_historyInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSalary_historyNestedInput = {
    create?: XOR<UserCreateWithoutSalary_historyInput, UserUncheckedCreateWithoutSalary_historyInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalary_historyInput
    upsert?: UserUpsertWithoutSalary_historyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalary_historyInput, UserUpdateWithoutSalary_historyInput>, UserUncheckedUpdateWithoutSalary_historyInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    rol_id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    firebaseUid?: StringNullableFilter<"User"> | string | null
    status?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type CategoryCreateWithoutUserInput = {
    name?: string | null
    icon?: string | null
    type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    icon?: string | null
    type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: CategoryCreateManyUserInput | CategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DebtCreateWithoutUserInput = {
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    duration_months?: number | null
    method?: string | null
    start_date?: string | null
    end_date?: string | null
    status?: string | null
    notifyEnabled?: boolean | null
    daysBeforeNotify?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amortizations?: AmortizationCreateNestedManyWithoutDebtInput
    notifications?: NotificationCreateNestedManyWithoutDebtInput
  }

  export type DebtUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    duration_months?: number | null
    method?: string | null
    start_date?: string | null
    end_date?: string | null
    status?: string | null
    notifyEnabled?: boolean | null
    daysBeforeNotify?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amortizations?: AmortizationUncheckedCreateNestedManyWithoutDebtInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutDebtInput
  }

  export type DebtCreateOrConnectWithoutUserInput = {
    where: DebtWhereUniqueInput
    create: XOR<DebtCreateWithoutUserInput, DebtUncheckedCreateWithoutUserInput>
  }

  export type DebtCreateManyUserInputEnvelope = {
    data: DebtCreateManyUserInput | DebtCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MetaCreateWithoutUserInput = {
    name: string
    description?: string | null
    target_amount: Decimal | DecimalJsLike | number | string
    deadline?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trackings?: MetaTrackingCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
    target_amount: Decimal | DecimalJsLike | number | string
    deadline?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trackings?: MetaTrackingUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaCreateOrConnectWithoutUserInput = {
    where: MetaWhereUniqueInput
    create: XOR<MetaCreateWithoutUserInput, MetaUncheckedCreateWithoutUserInput>
  }

  export type MetaCreateManyUserInputEnvelope = {
    data: MetaCreateManyUserInput | MetaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutUserInput = {
    os?: string | null
    browser?: string | null
    isMobile?: boolean
    userAgent?: string | null
    brand?: string | null
    model?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationPreferences?: NotificationPreferenceCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutUserInput = {
    id?: number
    os?: string | null
    browser?: string | null
    isMobile?: boolean
    userAgent?: string | null
    brand?: string | null
    model?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationPreferences?: NotificationPreferenceUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutUserInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceCreateManyUserInputEnvelope = {
    data: DeviceCreateManyUserInput | DeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VerificationCodeCreateWithoutUserInput = {
    code: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type VerificationCodeUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type VerificationCodeCreateOrConnectWithoutUserInput = {
    where: VerificationCodeWhereUniqueInput
    create: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput>
  }

  export type VerificationCodeCreateManyUserInputEnvelope = {
    data: VerificationCodeCreateManyUserInput | VerificationCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SalaryHistoryCreateWithoutUserInput = {
    salary_amount: Decimal | DecimalJsLike | number | string
    effective_date: string
    month_name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    salary_amount: Decimal | DecimalJsLike | number | string
    effective_date: string
    month_name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryHistoryCreateOrConnectWithoutUserInput = {
    where: SalaryHistoryWhereUniqueInput
    create: XOR<SalaryHistoryCreateWithoutUserInput, SalaryHistoryUncheckedCreateWithoutUserInput>
  }

  export type SalaryHistoryCreateManyUserInputEnvelope = {
    data: SalaryHistoryCreateManyUserInput | SalaryHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    debt?: DebtCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    message: string
    isRead?: boolean
    debt_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    user_id?: IntFilter<"Category"> | number
    name?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    type?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type DebtUpsertWithWhereUniqueWithoutUserInput = {
    where: DebtWhereUniqueInput
    update: XOR<DebtUpdateWithoutUserInput, DebtUncheckedUpdateWithoutUserInput>
    create: XOR<DebtCreateWithoutUserInput, DebtUncheckedCreateWithoutUserInput>
  }

  export type DebtUpdateWithWhereUniqueWithoutUserInput = {
    where: DebtWhereUniqueInput
    data: XOR<DebtUpdateWithoutUserInput, DebtUncheckedUpdateWithoutUserInput>
  }

  export type DebtUpdateManyWithWhereWithoutUserInput = {
    where: DebtScalarWhereInput
    data: XOR<DebtUpdateManyMutationInput, DebtUncheckedUpdateManyWithoutUserInput>
  }

  export type DebtScalarWhereInput = {
    AND?: DebtScalarWhereInput | DebtScalarWhereInput[]
    OR?: DebtScalarWhereInput[]
    NOT?: DebtScalarWhereInput | DebtScalarWhereInput[]
    id?: IntFilter<"Debt"> | number
    user_id?: IntFilter<"Debt"> | number
    name?: StringNullableFilter<"Debt"> | string | null
    description?: StringNullableFilter<"Debt"> | string | null
    amount?: DecimalNullableFilter<"Debt"> | Decimal | DecimalJsLike | number | string | null
    interest_rate?: DecimalNullableFilter<"Debt"> | Decimal | DecimalJsLike | number | string | null
    duration_months?: IntNullableFilter<"Debt"> | number | null
    method?: StringNullableFilter<"Debt"> | string | null
    start_date?: StringNullableFilter<"Debt"> | string | null
    end_date?: StringNullableFilter<"Debt"> | string | null
    status?: StringNullableFilter<"Debt"> | string | null
    notifyEnabled?: BoolNullableFilter<"Debt"> | boolean | null
    daysBeforeNotify?: IntNullableFilter<"Debt"> | number | null
    createdAt?: DateTimeFilter<"Debt"> | Date | string
    updatedAt?: DateTimeFilter<"Debt"> | Date | string
  }

  export type MetaUpsertWithWhereUniqueWithoutUserInput = {
    where: MetaWhereUniqueInput
    update: XOR<MetaUpdateWithoutUserInput, MetaUncheckedUpdateWithoutUserInput>
    create: XOR<MetaCreateWithoutUserInput, MetaUncheckedCreateWithoutUserInput>
  }

  export type MetaUpdateWithWhereUniqueWithoutUserInput = {
    where: MetaWhereUniqueInput
    data: XOR<MetaUpdateWithoutUserInput, MetaUncheckedUpdateWithoutUserInput>
  }

  export type MetaUpdateManyWithWhereWithoutUserInput = {
    where: MetaScalarWhereInput
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyWithoutUserInput>
  }

  export type MetaScalarWhereInput = {
    AND?: MetaScalarWhereInput | MetaScalarWhereInput[]
    OR?: MetaScalarWhereInput[]
    NOT?: MetaScalarWhereInput | MetaScalarWhereInput[]
    id?: IntFilter<"Meta"> | number
    user_id?: IntFilter<"Meta"> | number
    name?: StringFilter<"Meta"> | string
    description?: StringNullableFilter<"Meta"> | string | null
    target_amount?: DecimalFilter<"Meta"> | Decimal | DecimalJsLike | number | string
    deadline?: StringNullableFilter<"Meta"> | string | null
    status?: StringFilter<"Meta"> | string
    createdAt?: DateTimeFilter<"Meta"> | Date | string
    updatedAt?: DateTimeFilter<"Meta"> | Date | string
  }

  export type DeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
  }

  export type DeviceUpdateManyWithWhereWithoutUserInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: IntFilter<"Device"> | number
    user_id?: IntFilter<"Device"> | number
    os?: StringNullableFilter<"Device"> | string | null
    browser?: StringNullableFilter<"Device"> | string | null
    isMobile?: BoolFilter<"Device"> | boolean
    userAgent?: StringNullableFilter<"Device"> | string | null
    brand?: StringNullableFilter<"Device"> | string | null
    model?: StringNullableFilter<"Device"> | string | null
    status?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type VerificationCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: VerificationCodeWhereUniqueInput
    update: XOR<VerificationCodeUpdateWithoutUserInput, VerificationCodeUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput>
  }

  export type VerificationCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: VerificationCodeWhereUniqueInput
    data: XOR<VerificationCodeUpdateWithoutUserInput, VerificationCodeUncheckedUpdateWithoutUserInput>
  }

  export type VerificationCodeUpdateManyWithWhereWithoutUserInput = {
    where: VerificationCodeScalarWhereInput
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type VerificationCodeScalarWhereInput = {
    AND?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
    OR?: VerificationCodeScalarWhereInput[]
    NOT?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
    id?: IntFilter<"VerificationCode"> | number
    code?: StringFilter<"VerificationCode"> | string
    userId?: IntFilter<"VerificationCode"> | number
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    isUsed?: BoolFilter<"VerificationCode"> | boolean
  }

  export type SalaryHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: SalaryHistoryWhereUniqueInput
    update: XOR<SalaryHistoryUpdateWithoutUserInput, SalaryHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<SalaryHistoryCreateWithoutUserInput, SalaryHistoryUncheckedCreateWithoutUserInput>
  }

  export type SalaryHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: SalaryHistoryWhereUniqueInput
    data: XOR<SalaryHistoryUpdateWithoutUserInput, SalaryHistoryUncheckedUpdateWithoutUserInput>
  }

  export type SalaryHistoryUpdateManyWithWhereWithoutUserInput = {
    where: SalaryHistoryScalarWhereInput
    data: XOR<SalaryHistoryUpdateManyMutationInput, SalaryHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type SalaryHistoryScalarWhereInput = {
    AND?: SalaryHistoryScalarWhereInput | SalaryHistoryScalarWhereInput[]
    OR?: SalaryHistoryScalarWhereInput[]
    NOT?: SalaryHistoryScalarWhereInput | SalaryHistoryScalarWhereInput[]
    id?: IntFilter<"SalaryHistory"> | number
    user_id?: IntFilter<"SalaryHistory"> | number
    salary_amount?: DecimalFilter<"SalaryHistory"> | Decimal | DecimalJsLike | number | string
    effective_date?: StringFilter<"SalaryHistory"> | string
    month_name?: StringFilter<"SalaryHistory"> | string
    description?: StringNullableFilter<"SalaryHistory"> | string | null
    createdAt?: DateTimeFilter<"SalaryHistory"> | Date | string
    updatedAt?: DateTimeFilter<"SalaryHistory"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    user_id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    debt_id?: IntNullableFilter<"Notification"> | number | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutDevicesInput = {
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: number
    rol_id: number
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type NotificationPreferenceCreateWithoutDeviceInput = {
    pushEnabled?: boolean
    subscription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationPreferenceUncheckedCreateWithoutDeviceInput = {
    id?: number
    pushEnabled?: boolean
    subscription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationPreferenceCreateOrConnectWithoutDeviceInput = {
    where: NotificationPreferenceWhereUniqueInput
    create: XOR<NotificationPreferenceCreateWithoutDeviceInput, NotificationPreferenceUncheckedCreateWithoutDeviceInput>
  }

  export type NotificationPreferenceCreateManyDeviceInputEnvelope = {
    data: NotificationPreferenceCreateManyDeviceInput | NotificationPreferenceCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    rol_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NotificationPreferenceUpsertWithWhereUniqueWithoutDeviceInput = {
    where: NotificationPreferenceWhereUniqueInput
    update: XOR<NotificationPreferenceUpdateWithoutDeviceInput, NotificationPreferenceUncheckedUpdateWithoutDeviceInput>
    create: XOR<NotificationPreferenceCreateWithoutDeviceInput, NotificationPreferenceUncheckedCreateWithoutDeviceInput>
  }

  export type NotificationPreferenceUpdateWithWhereUniqueWithoutDeviceInput = {
    where: NotificationPreferenceWhereUniqueInput
    data: XOR<NotificationPreferenceUpdateWithoutDeviceInput, NotificationPreferenceUncheckedUpdateWithoutDeviceInput>
  }

  export type NotificationPreferenceUpdateManyWithWhereWithoutDeviceInput = {
    where: NotificationPreferenceScalarWhereInput
    data: XOR<NotificationPreferenceUpdateManyMutationInput, NotificationPreferenceUncheckedUpdateManyWithoutDeviceInput>
  }

  export type NotificationPreferenceScalarWhereInput = {
    AND?: NotificationPreferenceScalarWhereInput | NotificationPreferenceScalarWhereInput[]
    OR?: NotificationPreferenceScalarWhereInput[]
    NOT?: NotificationPreferenceScalarWhereInput | NotificationPreferenceScalarWhereInput[]
    id?: IntFilter<"NotificationPreference"> | number
    device_id?: IntNullableFilter<"NotificationPreference"> | number | null
    pushEnabled?: BoolFilter<"NotificationPreference"> | boolean
    subscription?: StringNullableFilter<"NotificationPreference"> | string | null
    createdAt?: DateTimeFilter<"NotificationPreference"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationPreference"> | Date | string
  }

  export type DeviceCreateWithoutNotificationPreferencesInput = {
    os?: string | null
    browser?: string | null
    isMobile?: boolean
    userAgent?: string | null
    brand?: string | null
    model?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutNotificationPreferencesInput = {
    id?: number
    user_id: number
    os?: string | null
    browser?: string | null
    isMobile?: boolean
    userAgent?: string | null
    brand?: string | null
    model?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutNotificationPreferencesInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutNotificationPreferencesInput, DeviceUncheckedCreateWithoutNotificationPreferencesInput>
  }

  export type DeviceUpsertWithoutNotificationPreferencesInput = {
    update: XOR<DeviceUpdateWithoutNotificationPreferencesInput, DeviceUncheckedUpdateWithoutNotificationPreferencesInput>
    create: XOR<DeviceCreateWithoutNotificationPreferencesInput, DeviceUncheckedCreateWithoutNotificationPreferencesInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutNotificationPreferencesInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutNotificationPreferencesInput, DeviceUncheckedUpdateWithoutNotificationPreferencesInput>
  }

  export type DeviceUpdateWithoutNotificationPreferencesInput = {
    os?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutNotificationPreferencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    os?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutNotificationsInput = {
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    rol_id: number
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type DebtCreateWithoutNotificationsInput = {
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    duration_months?: number | null
    method?: string | null
    start_date?: string | null
    end_date?: string | null
    status?: string | null
    notifyEnabled?: boolean | null
    daysBeforeNotify?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDebtsInput
    amortizations?: AmortizationCreateNestedManyWithoutDebtInput
  }

  export type DebtUncheckedCreateWithoutNotificationsInput = {
    id?: number
    user_id: number
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    duration_months?: number | null
    method?: string | null
    start_date?: string | null
    end_date?: string | null
    status?: string | null
    notifyEnabled?: boolean | null
    daysBeforeNotify?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amortizations?: AmortizationUncheckedCreateNestedManyWithoutDebtInput
  }

  export type DebtCreateOrConnectWithoutNotificationsInput = {
    where: DebtWhereUniqueInput
    create: XOR<DebtCreateWithoutNotificationsInput, DebtUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    rol_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DebtUpsertWithoutNotificationsInput = {
    update: XOR<DebtUpdateWithoutNotificationsInput, DebtUncheckedUpdateWithoutNotificationsInput>
    create: XOR<DebtCreateWithoutNotificationsInput, DebtUncheckedCreateWithoutNotificationsInput>
    where?: DebtWhereInput
  }

  export type DebtUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: DebtWhereInput
    data: XOR<DebtUpdateWithoutNotificationsInput, DebtUncheckedUpdateWithoutNotificationsInput>
  }

  export type DebtUpdateWithoutNotificationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_months?: NullableIntFieldUpdateOperationsInput | number | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifyEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daysBeforeNotify?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDebtsNestedInput
    amortizations?: AmortizationUpdateManyWithoutDebtNestedInput
  }

  export type DebtUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_months?: NullableIntFieldUpdateOperationsInput | number | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifyEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daysBeforeNotify?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amortizations?: AmortizationUncheckedUpdateManyWithoutDebtNestedInput
  }

  export type UserCreateWithoutVerificationCodesInput = {
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationCodesInput = {
    id?: number
    rol_id: number
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationCodesInput, UserUncheckedCreateWithoutVerificationCodesInput>
  }

  export type UserUpsertWithoutVerificationCodesInput = {
    update: XOR<UserUpdateWithoutVerificationCodesInput, UserUncheckedUpdateWithoutVerificationCodesInput>
    create: XOR<UserCreateWithoutVerificationCodesInput, UserUncheckedCreateWithoutVerificationCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationCodesInput, UserUncheckedUpdateWithoutVerificationCodesInput>
  }

  export type UserUpdateWithoutVerificationCodesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationCodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    rol_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDebtsInput = {
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDebtsInput = {
    id?: number
    rol_id: number
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDebtsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDebtsInput, UserUncheckedCreateWithoutDebtsInput>
  }

  export type AmortizationCreateWithoutDebtInput = {
    number_months?: number | null
    date?: string | null
    quota?: Decimal | DecimalJsLike | number | string | null
    interest?: Decimal | DecimalJsLike | number | string | null
    amortized?: Decimal | DecimalJsLike | number | string | null
    outstanding?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmortizationUncheckedCreateWithoutDebtInput = {
    id?: number
    number_months?: number | null
    date?: string | null
    quota?: Decimal | DecimalJsLike | number | string | null
    interest?: Decimal | DecimalJsLike | number | string | null
    amortized?: Decimal | DecimalJsLike | number | string | null
    outstanding?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmortizationCreateOrConnectWithoutDebtInput = {
    where: AmortizationWhereUniqueInput
    create: XOR<AmortizationCreateWithoutDebtInput, AmortizationUncheckedCreateWithoutDebtInput>
  }

  export type AmortizationCreateManyDebtInputEnvelope = {
    data: AmortizationCreateManyDebtInput | AmortizationCreateManyDebtInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutDebtInput = {
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutDebtInput = {
    id?: number
    user_id: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutDebtInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutDebtInput, NotificationUncheckedCreateWithoutDebtInput>
  }

  export type NotificationCreateManyDebtInputEnvelope = {
    data: NotificationCreateManyDebtInput | NotificationCreateManyDebtInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDebtsInput = {
    update: XOR<UserUpdateWithoutDebtsInput, UserUncheckedUpdateWithoutDebtsInput>
    create: XOR<UserCreateWithoutDebtsInput, UserUncheckedCreateWithoutDebtsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDebtsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDebtsInput, UserUncheckedUpdateWithoutDebtsInput>
  }

  export type UserUpdateWithoutDebtsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDebtsInput = {
    id?: IntFieldUpdateOperationsInput | number
    rol_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AmortizationUpsertWithWhereUniqueWithoutDebtInput = {
    where: AmortizationWhereUniqueInput
    update: XOR<AmortizationUpdateWithoutDebtInput, AmortizationUncheckedUpdateWithoutDebtInput>
    create: XOR<AmortizationCreateWithoutDebtInput, AmortizationUncheckedCreateWithoutDebtInput>
  }

  export type AmortizationUpdateWithWhereUniqueWithoutDebtInput = {
    where: AmortizationWhereUniqueInput
    data: XOR<AmortizationUpdateWithoutDebtInput, AmortizationUncheckedUpdateWithoutDebtInput>
  }

  export type AmortizationUpdateManyWithWhereWithoutDebtInput = {
    where: AmortizationScalarWhereInput
    data: XOR<AmortizationUpdateManyMutationInput, AmortizationUncheckedUpdateManyWithoutDebtInput>
  }

  export type AmortizationScalarWhereInput = {
    AND?: AmortizationScalarWhereInput | AmortizationScalarWhereInput[]
    OR?: AmortizationScalarWhereInput[]
    NOT?: AmortizationScalarWhereInput | AmortizationScalarWhereInput[]
    id?: IntFilter<"Amortization"> | number
    debt_id?: IntFilter<"Amortization"> | number
    number_months?: IntNullableFilter<"Amortization"> | number | null
    date?: StringNullableFilter<"Amortization"> | string | null
    quota?: DecimalNullableFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    interest?: DecimalNullableFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    amortized?: DecimalNullableFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    outstanding?: DecimalNullableFilter<"Amortization"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"Amortization"> | string | null
    createdAt?: DateTimeFilter<"Amortization"> | Date | string
    updatedAt?: DateTimeFilter<"Amortization"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutDebtInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutDebtInput, NotificationUncheckedUpdateWithoutDebtInput>
    create: XOR<NotificationCreateWithoutDebtInput, NotificationUncheckedCreateWithoutDebtInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutDebtInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutDebtInput, NotificationUncheckedUpdateWithoutDebtInput>
  }

  export type NotificationUpdateManyWithWhereWithoutDebtInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutDebtInput>
  }

  export type DebtCreateWithoutAmortizationsInput = {
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    duration_months?: number | null
    method?: string | null
    start_date?: string | null
    end_date?: string | null
    status?: string | null
    notifyEnabled?: boolean | null
    daysBeforeNotify?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDebtsInput
    notifications?: NotificationCreateNestedManyWithoutDebtInput
  }

  export type DebtUncheckedCreateWithoutAmortizationsInput = {
    id?: number
    user_id: number
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    duration_months?: number | null
    method?: string | null
    start_date?: string | null
    end_date?: string | null
    status?: string | null
    notifyEnabled?: boolean | null
    daysBeforeNotify?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutDebtInput
  }

  export type DebtCreateOrConnectWithoutAmortizationsInput = {
    where: DebtWhereUniqueInput
    create: XOR<DebtCreateWithoutAmortizationsInput, DebtUncheckedCreateWithoutAmortizationsInput>
  }

  export type DebtUpsertWithoutAmortizationsInput = {
    update: XOR<DebtUpdateWithoutAmortizationsInput, DebtUncheckedUpdateWithoutAmortizationsInput>
    create: XOR<DebtCreateWithoutAmortizationsInput, DebtUncheckedCreateWithoutAmortizationsInput>
    where?: DebtWhereInput
  }

  export type DebtUpdateToOneWithWhereWithoutAmortizationsInput = {
    where?: DebtWhereInput
    data: XOR<DebtUpdateWithoutAmortizationsInput, DebtUncheckedUpdateWithoutAmortizationsInput>
  }

  export type DebtUpdateWithoutAmortizationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_months?: NullableIntFieldUpdateOperationsInput | number | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifyEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daysBeforeNotify?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDebtsNestedInput
    notifications?: NotificationUpdateManyWithoutDebtNestedInput
  }

  export type DebtUncheckedUpdateWithoutAmortizationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_months?: NullableIntFieldUpdateOperationsInput | number | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifyEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daysBeforeNotify?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutDebtNestedInput
  }

  export type UserCreateWithoutCategoriesInput = {
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    debts?: DebtCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: number
    rol_id: number
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type TransactionCreateWithoutCategoryInput = {
    name?: string | null
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    date: string
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: number
    name?: string | null
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    date: string
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateManyCategoryInputEnvelope = {
    data: TransactionCreateManyCategoryInput | TransactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    rol_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    category_id?: IntFilter<"Transaction"> | number
    name?: StringNullableFilter<"Transaction"> | string | null
    description?: StringNullableFilter<"Transaction"> | string | null
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    date?: StringFilter<"Transaction"> | string
    time?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type CategoryCreateWithoutTransactionsInput = {
    name?: string | null
    icon?: string | null
    type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutTransactionsInput = {
    id?: number
    user_id: number
    name?: string | null
    icon?: string | null
    type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutTransactionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
  }

  export type CategoryUpsertWithoutTransactionsInput = {
    update: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateWithoutTransactionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMetasInput = {
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMetasInput = {
    id?: number
    rol_id: number
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    salary_history?: SalaryHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMetasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMetasInput, UserUncheckedCreateWithoutMetasInput>
  }

  export type MetaTrackingCreateWithoutMetaInput = {
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaTrackingUncheckedCreateWithoutMetaInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaTrackingCreateOrConnectWithoutMetaInput = {
    where: MetaTrackingWhereUniqueInput
    create: XOR<MetaTrackingCreateWithoutMetaInput, MetaTrackingUncheckedCreateWithoutMetaInput>
  }

  export type MetaTrackingCreateManyMetaInputEnvelope = {
    data: MetaTrackingCreateManyMetaInput | MetaTrackingCreateManyMetaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMetasInput = {
    update: XOR<UserUpdateWithoutMetasInput, UserUncheckedUpdateWithoutMetasInput>
    create: XOR<UserCreateWithoutMetasInput, UserUncheckedCreateWithoutMetasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMetasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMetasInput, UserUncheckedUpdateWithoutMetasInput>
  }

  export type UserUpdateWithoutMetasInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMetasInput = {
    id?: IntFieldUpdateOperationsInput | number
    rol_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MetaTrackingUpsertWithWhereUniqueWithoutMetaInput = {
    where: MetaTrackingWhereUniqueInput
    update: XOR<MetaTrackingUpdateWithoutMetaInput, MetaTrackingUncheckedUpdateWithoutMetaInput>
    create: XOR<MetaTrackingCreateWithoutMetaInput, MetaTrackingUncheckedCreateWithoutMetaInput>
  }

  export type MetaTrackingUpdateWithWhereUniqueWithoutMetaInput = {
    where: MetaTrackingWhereUniqueInput
    data: XOR<MetaTrackingUpdateWithoutMetaInput, MetaTrackingUncheckedUpdateWithoutMetaInput>
  }

  export type MetaTrackingUpdateManyWithWhereWithoutMetaInput = {
    where: MetaTrackingScalarWhereInput
    data: XOR<MetaTrackingUpdateManyMutationInput, MetaTrackingUncheckedUpdateManyWithoutMetaInput>
  }

  export type MetaTrackingScalarWhereInput = {
    AND?: MetaTrackingScalarWhereInput | MetaTrackingScalarWhereInput[]
    OR?: MetaTrackingScalarWhereInput[]
    NOT?: MetaTrackingScalarWhereInput | MetaTrackingScalarWhereInput[]
    id?: IntFilter<"MetaTracking"> | number
    meta_id?: IntFilter<"MetaTracking"> | number
    amount?: DecimalFilter<"MetaTracking"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"MetaTracking"> | string | null
    date?: StringFilter<"MetaTracking"> | string
    createdAt?: DateTimeFilter<"MetaTracking"> | Date | string
    updatedAt?: DateTimeFilter<"MetaTracking"> | Date | string
  }

  export type MetaCreateWithoutTrackingsInput = {
    name: string
    description?: string | null
    target_amount: Decimal | DecimalJsLike | number | string
    deadline?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMetasInput
  }

  export type MetaUncheckedCreateWithoutTrackingsInput = {
    id?: number
    user_id: number
    name: string
    description?: string | null
    target_amount: Decimal | DecimalJsLike | number | string
    deadline?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaCreateOrConnectWithoutTrackingsInput = {
    where: MetaWhereUniqueInput
    create: XOR<MetaCreateWithoutTrackingsInput, MetaUncheckedCreateWithoutTrackingsInput>
  }

  export type MetaUpsertWithoutTrackingsInput = {
    update: XOR<MetaUpdateWithoutTrackingsInput, MetaUncheckedUpdateWithoutTrackingsInput>
    create: XOR<MetaCreateWithoutTrackingsInput, MetaUncheckedCreateWithoutTrackingsInput>
    where?: MetaWhereInput
  }

  export type MetaUpdateToOneWithWhereWithoutTrackingsInput = {
    where?: MetaWhereInput
    data: XOR<MetaUpdateWithoutTrackingsInput, MetaUncheckedUpdateWithoutTrackingsInput>
  }

  export type MetaUpdateWithoutTrackingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMetasNestedInput
  }

  export type MetaUncheckedUpdateWithoutTrackingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSalary_historyInput = {
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    debts?: DebtCreateNestedManyWithoutUserInput
    metas?: MetaCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSalary_historyInput = {
    id?: number
    rol_id: number
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    debts?: DebtUncheckedCreateNestedManyWithoutUserInput
    metas?: MetaUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSalary_historyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalary_historyInput, UserUncheckedCreateWithoutSalary_historyInput>
  }

  export type UserUpsertWithoutSalary_historyInput = {
    update: XOR<UserUpdateWithoutSalary_historyInput, UserUncheckedUpdateWithoutSalary_historyInput>
    create: XOR<UserCreateWithoutSalary_historyInput, UserUncheckedCreateWithoutSalary_historyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalary_historyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalary_historyInput, UserUncheckedUpdateWithoutSalary_historyInput>
  }

  export type UserUpdateWithoutSalary_historyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSalary_historyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rol_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: number
    name?: string | null
    last_name?: string | null
    username?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    avatar?: string | null
    firebaseUid?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    debts?: DebtUpdateManyWithoutUserNestedInput
    metas?: MetaUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    debts?: DebtUncheckedUpdateManyWithoutUserNestedInput
    metas?: MetaUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    salary_history?: SalaryHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyUserInput = {
    id?: number
    name?: string | null
    icon?: string | null
    type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtCreateManyUserInput = {
    id?: number
    name?: string | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    duration_months?: number | null
    method?: string | null
    start_date?: string | null
    end_date?: string | null
    status?: string | null
    notifyEnabled?: boolean | null
    daysBeforeNotify?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaCreateManyUserInput = {
    id?: number
    name: string
    description?: string | null
    target_amount: Decimal | DecimalJsLike | number | string
    deadline?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateManyUserInput = {
    id?: number
    os?: string | null
    browser?: string | null
    isMobile?: boolean
    userAgent?: string | null
    brand?: string | null
    model?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodeCreateManyUserInput = {
    id?: number
    code: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type SalaryHistoryCreateManyUserInput = {
    id?: number
    salary_amount: Decimal | DecimalJsLike | number | string
    effective_date: string
    month_name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title: string
    message: string
    isRead?: boolean
    debt_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_months?: NullableIntFieldUpdateOperationsInput | number | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifyEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daysBeforeNotify?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amortizations?: AmortizationUpdateManyWithoutDebtNestedInput
    notifications?: NotificationUpdateManyWithoutDebtNestedInput
  }

  export type DebtUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_months?: NullableIntFieldUpdateOperationsInput | number | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifyEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daysBeforeNotify?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amortizations?: AmortizationUncheckedUpdateManyWithoutDebtNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutDebtNestedInput
  }

  export type DebtUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_months?: NullableIntFieldUpdateOperationsInput | number | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifyEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daysBeforeNotify?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackings?: MetaTrackingUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackings?: MetaTrackingUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    target_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUpdateWithoutUserInput = {
    os?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationPreferences?: NotificationPreferenceUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    os?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationPreferences?: NotificationPreferenceUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    os?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationCodeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationCodeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SalaryHistoryUpdateWithoutUserInput = {
    salary_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    effective_date?: StringFieldUpdateOperationsInput | string
    month_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    salary_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    effective_date?: StringFieldUpdateOperationsInput | string
    month_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    salary_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    effective_date?: StringFieldUpdateOperationsInput | string
    month_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debt?: DebtUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    debt_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    debt_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferenceCreateManyDeviceInput = {
    id?: number
    pushEnabled?: boolean
    subscription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationPreferenceUpdateWithoutDeviceInput = {
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferenceUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferenceUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmortizationCreateManyDebtInput = {
    id?: number
    number_months?: number | null
    date?: string | null
    quota?: Decimal | DecimalJsLike | number | string | null
    interest?: Decimal | DecimalJsLike | number | string | null
    amortized?: Decimal | DecimalJsLike | number | string | null
    outstanding?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyDebtInput = {
    id?: number
    user_id: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmortizationUpdateWithoutDebtInput = {
    number_months?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    quota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amortized?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    outstanding?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmortizationUncheckedUpdateWithoutDebtInput = {
    id?: IntFieldUpdateOperationsInput | number
    number_months?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    quota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amortized?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    outstanding?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmortizationUncheckedUpdateManyWithoutDebtInput = {
    id?: IntFieldUpdateOperationsInput | number
    number_months?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    quota?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amortized?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    outstanding?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutDebtInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutDebtInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutDebtInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyCategoryInput = {
    id?: number
    name?: string | null
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    date: string
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutCategoryInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaTrackingCreateManyMetaInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaTrackingUpdateWithoutMetaInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaTrackingUncheckedUpdateWithoutMetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaTrackingUncheckedUpdateManyWithoutMetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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