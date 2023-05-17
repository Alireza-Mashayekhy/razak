export const state = () => ({
  lang: 'fa',
});
export const mutations = {
  change(state:any){
    if(state.lang == 'en'){
      state.lang = 'fa'
    }else{
      state.lang = 'en'
    }
  },
  changeToEn(state:any){
    state.lang = 'en'
  },
  changeToFa(state:any){
    state.lang = 'fa'
  }
}
