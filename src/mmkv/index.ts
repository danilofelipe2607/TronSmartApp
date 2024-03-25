import { MMKV } from 'react-native-mmkv'

const userId = "rtes"
const USER_DIRECTORY = "ds"

export const storage = new MMKV({
    id: `user-${userId}-storage`,
    path: `${USER_DIRECTORY}/storage`,
    encryptionKey: 'hunter2'
})