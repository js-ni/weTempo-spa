/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @name CityHook
 * @memberof module:common/hooks
 * @type {ReactHook}
 * @author boykland/clenondavis <dev@carloslenon.com>
 * @return {React} Fund Hook
 */

// #region dependencies
import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
// #endregion
// #region common
import { useStore } from "../../common/store";
import { globalAction } from "../../common/actions";
// #endregion
// #region service
import { CitiesSvc } from "../entities";
// #endregion

/**
 * @function
 * @name useCreateNewFund
 * @memberof Fund Hook
 * @description Hook to create a new fund rom funds service
 * @param {OBJECT} fundData the fund information
 * @return {OBJECT} structure for Hook context.
 */
export const useAllCitiesFromScrapp = () => {
  // TODO: remove this call instance as well as singleton pattern are implemented
  const citiesSvc = new CitiesSvc();
  const [{}, dispatch] = useStore();
  const [data, setData] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(globalAction.showLoadingProgress(true));
    try {
      citiesSvc.all().then(resp => {
        dispatch(globalAction.showLoadingProgress(false));
        if (Object.prototype.hasOwnProperty.call(resp, "err")) {
          enqueueSnackbar("An error occurred while loading Cities", {
            variant: "error"
          });
        } else {
          setData(resp);
        }
      });
    } catch (err) {
      enqueueSnackbar("An error occurred while loading Cities", {
        variant: "error"
      });
      dispatch(globalAction.showLoadingProgress(false));
    }
  }, []);

  return [{ citiesList: data }];
};
