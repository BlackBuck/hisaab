import { bigint, text, singlestoreTableCreator, timestamp, singlestoreEnum } from "drizzle-orm/singlestore-core";

const expenseTypeEnum = singlestoreEnum('expense_type', ["Spending", "Earning"]);

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = singlestoreTableCreator(
  (name) => `drive_clone_${name}`
)
export const beneficiaries_table = createTable("beneficiaries", {
  id: bigint('id', {mode: "number", unsigned: true}).primaryKey(),
  name: text("name").notNull(),
});

export const expenses_table = createTable("expenses", {
  id: bigint('id', {mode: "number", unsigned: true}).primaryKey(),
  expense_type: expenseTypeEnum,
  ownerId: text("owner_id").notNull(),
  beneficiaryId: bigint("beneficiary_id", {mode: "number"}),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
