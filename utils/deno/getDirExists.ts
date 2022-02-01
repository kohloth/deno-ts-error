export function getDirExists(filename: string) {
  try {
    const fileInfo = Deno.statSync(filename);
    // successful, file or directory must exist
    return !fileInfo.isFile;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      // file or directory does not exist
      return false;
    } else {
      // unexpected error, maybe permissions, pass it along
      throw error;
    }
  }
};
