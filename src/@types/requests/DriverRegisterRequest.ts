import {UserRegisterRequest} from "./UserRegisterRequest";

type AutomobileRequest = {
  licensePlate: string;
  model: string;
  type: string;
};

type DriverRegisterRequest = {
  user: UserRegisterRequest;
  cnh: string;
  automobile: AutomobileRequest;
};

export type {UserRegisterRequest, DriverRegisterRequest};
