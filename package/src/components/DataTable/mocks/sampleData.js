import data from "./orders.json";

/**
 * Simulate a request for paginated data
 * @param {Object} args Arguments for simulated request and pagination
 * @param {Number} args.offset Unsigned int offset
 * @param {Number} args.limit Unsifned in size per page
 * @param {Number} args.simulatedDelay Time in miliseconds to simulate a delay for
 * @returns {Array} arg.array
 */
export async function getPaginatedData({
  filter,
  offset = 0,
  limit = 10,
  simulatedDelay = 0,
  sortBy = "createdAt",
  sortOrder = "desc"
}) {
  await new Promise((resolve) => setTimeout(resolve, simulatedDelay));

  const sortedData = data.sort((itemA, itemB) => {
    if (sortOrder === "desc") {
      return itemA[sortBy] < itemB[sortBy];
    }
    return itemA[sortBy] > itemB[sortBy];
  });

  if (filter) {
    const nodes = sortedData.filter((item) => (
      Object.values(item).join(" ").includes(filter)
    ));

    return {
      data: {
        nodes: nodes.slice(offset, limit),
        totalCount: nodes.length
      }
    };
  }

  return {
    data: {
      nodes: sortedData.slice(offset, limit),
      totalCount: data.length
    }
  };
}
