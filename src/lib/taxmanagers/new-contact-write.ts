export interface WriteResult<T> {
  data: T[] | null;
  error: { code?: string; message?: string } | null;
}

interface NewContactWriteOptions<T> {
  linkedinKey: string | null;
  findExisting: () => Promise<T | null>;
  buildNewPayload: () => Promise<Record<string, unknown>>;
  legacyPayload: Record<string, unknown>;
  insertNew: (payload: Record<string, unknown>) => Promise<WriteResult<T>>;
  upsertLegacy: (payload: Record<string, unknown>) => Promise<WriteResult<T>>;
}

export interface NewContactWriteOutcome<T> extends WriteResult<T> {
  mode: "inserted" | "updated_existing" | "lost_insert_race" | "failed";
}

export async function writeNewContactSafely<T>(
  options: NewContactWriteOptions<T>,
): Promise<NewContactWriteOutcome<T>> {
  const existing = await options.findExisting();
  if (existing) {
    const result = await options.upsertLegacy(options.legacyPayload);
    return { ...result, mode: result.error ? "failed" : "updated_existing" };
  }

  const newPayload = await options.buildNewPayload();
  const inserted = await options.insertNew(newPayload);
  if (!inserted.error) return { ...inserted, mode: "inserted" };

  if (options.linkedinKey && inserted.error.code === "23505") {
    const winner = await options.upsertLegacy(options.legacyPayload);
    return { ...winner, mode: winner.error ? "failed" : "lost_insert_race" };
  }

  return { ...inserted, mode: "failed" };
}
