export interface UserDTO {
  rol_id: number;
  name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  firebaseUid: string;
  status: boolean;
}

export interface UserResponseDTO {
  rol_id: number;
  name: string;
  last_name: string;
  username: string;
  email: string;
  phone: string;
  firebaseUid: string;
  status: boolean;
}

export interface UserDTO2 {
  rol_id: number;
  name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  status: boolean;
  phone?: string;
  firebaseUid?: string;
}