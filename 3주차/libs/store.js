import create from 'zustand';

// 전역 상태 관리의 형태 지정해주기
const useStore = create((set)=>({
    selectedCategory: '',
    changeCategory: (category)=> set({selectedCategory: category})
}));

export default useStore;

