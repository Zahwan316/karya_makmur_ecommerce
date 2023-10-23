import {create} from "zustand"

const useFormStore = create((set) => ({
    form:{},
    setform:(name,value) => set((state) => ({form:{...state.form,[name]:value}})),
    resetform:() => set(() => ({form:{}})),
    searchtext:"",
    setsearchtext:(data) => set(() => ({searchtext:data})),
}))

export default useFormStore