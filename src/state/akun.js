import {create} from "zustand"

const useAkunStore = create((set) => ({
    akun:[],
    userdata:[],
    useralamat:[],
    isLogin:false,
    setakun:(data) => set(() => ({akun:data})), 
    setuserdata:(data) => set(() => ({userdata:data})), 
    setuseralamat:(data) => set(() => ({useralamat:data})), 
}))

export default useAkunStore;