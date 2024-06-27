import { reqDitto } from "./../api/index";
 
import { useRequest } from "ahooks"
import { useMemo } from "react"

interface Props {
  /** 是否是手动调用 */
  manual?: boolean
  /** 成功回调 */
  onSuccess?: any
}

/**
 *  自动获取配置信息并且存储到store中
 * @param props
 * @returns
 */
function useDitto(props?: Props) {
  const { manual = false } = props || {}
  // const { set_config } = useOkStore()
  const { data, run: runReqConfigApi } = useRequest(reqDitto, {
    onSuccess: (data) => {
      // set_config(data)
      console.log("hi",data);
    },
    manual,
  })

  const res = useMemo(
    () => ({ data, run: runReqConfigApi }),
    [data, runReqConfigApi],
  )

  return res
}

export default useDitto
