export const getBlogsBase = async (perPage: number, categories: number[], categoriesExclude: number[] = []) => {
  try {
    const response = await $fetch(`https://qrx.com.vn/blog/wp-json/wp/v2/posts`, {
      method: "GET",
      query: { per_page: perPage, categories, categories_exclude: categoriesExclude },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
