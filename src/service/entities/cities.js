/**
 * @name Services/Cities
 * @memberof Services
 * @type {Object}
 * @return {Object} List of cities services
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */
// #region common
import BaseService from "../common/baseService";
import { citiesEnd } from "../common/endpoints";
// #endregion

class CitiesService extends BaseService {
  /**
   * @function
   * @name all
   * @memberof Services/Cities
   * @description load all cities by filter options
   * @param {OBJECT} filter - Attributes for filtering info
   */
  all = filter => this.get(citiesEnd.all, filter);
}

export default CitiesService;
