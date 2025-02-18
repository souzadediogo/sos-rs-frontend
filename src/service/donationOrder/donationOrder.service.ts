import { api } from '@/api';
import {
  ICreateDonateResponse,
  ICreateDonationOrderProps,
  IDonateOrderItem,
} from './types';
import { IServerResponse } from '@/types';
import { IPaginatedResponse } from '@/hooks/usePaginatedQuery/types';

const DonationOrderServices = {
  store: async (payload: ICreateDonationOrderProps) => {
    const { data } = await api.post<IServerResponse<ICreateDonateResponse>>(
      '/donation/order',
      payload
    );
    return data;
  },
  getAll: async (shelterId: string) => {
    const { data } = await api.get<
      IServerResponse<IPaginatedResponse<IDonateOrderItem>>
    >('/donation/order', {
      params: { shelterId },
    });
    return data;
  },
  find: async (id: string) => {
    const { data } = await api.get<IServerResponse<IDonateOrderItem>>(
      `/donation/order/${id}`
    );
    return data;
  },
};

export { DonationOrderServices };
