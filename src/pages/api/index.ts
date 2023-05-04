import Api from "@/services/request/Api"
import { bannerResponse } from "@/type/types"

export const fetchBanner = async ():Promise<bannerResponse> => {
    const response = await Api.get('/banner')
    return response.data
}
