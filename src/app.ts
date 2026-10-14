import http from "http";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'
import { Route } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const baseUrl = request.url?.split("?")[0]

    if (request.method === HttpMethod.GET && baseUrl === Route.LIST) {
        await getListEpisodes(request, response)
    }

    if (request.method === HttpMethod.GET && baseUrl === Route.EPISODE) {
        await getFilterEpisodes(request, response)
    }
}