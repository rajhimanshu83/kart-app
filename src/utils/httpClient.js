
/**
 * _clientService
 * Client for remote service integration
 */

/**
 * @param {Object} params
 * @param {string} params.path  path to resource relative to baseUrl
 * @param {string} params.baseUrl  base URL for resource
 * @param {Object} params.headers  init headers for request
 * @param {Object} params.options  init options for request
 * @param {Object} params.payload  JSON payload attachment
 */
function HTTPClient({
  path = "",
  baseUrl = "",
  headers = {},
  options = {},
  payload,
}) {
  const _url = (() => {
    let _path = path;

    if (_path[0] !== "/") {
      _path = "/" + _path;
    }

    return baseUrl + _path;
  })();

  const _options = {
    ...JSON.parse(JSON.stringify(options)),
    credentials: "include",
    headers: {
      ...(headers || {}),
    },
  };

  if (payload) {
    _options.body = JSON.stringify(payload);
  }

  const _handleError = (error) => {
    console.error(error);
    throw error;
  };

  const _fetch = async (...args) => {
    try {
      const response = await fetch(...args);
      const responseJson = await response.json();

      return {
        ok: response.ok,
        ...responseJson,
      };
    } catch (error) {
      _handleError(error);
    }
  };

  /**
   * GET request to remote service
   */
  this.get = () =>
    _fetch(_url, {
      ..._options,
      method: "GET",
    });

  /**
   * POST request to remote service
   */
  this.post = () =>
    _fetch(_url, {
      ..._options,
      method: "POST",
    });

  /**
   * PUT request to remote service
   */
  this.put = () =>
    _fetch(_url, {
      ..._options,
      method: "PUT",
    });

  /**
   * PATCH request to remote service
   */
  this.patch = () =>
    _fetch(_url, {
      ..._options,
      method: "PATCH",
    });

  /**
   * DELETE request to remote service
   */
  this.delete = () =>
    _fetch(_url, {
      ..._options,
      method: "DELETE",
    });
}

function APIClient({ path = "", headers = {}, payload }) {
  return new HTTPClient({
    path,
    headers: {
      "Access-Control-Allow-Origin": "*",
      ...headers,
    },
    payload,
    baseUrl: "/api",
  });
}

export { APIClient, HTTPClient };
