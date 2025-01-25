import { create } from "zustand";
import { persist } from "zustand/middleware";
import { intailItems } from "../lib/constants";

export const useItemsStore = create(
    persist(
        (set)=>({
            items:intailItems,
            addItems:(newItemText)=>{
                const newItem={
                    id:new Date().getTime(),
                    name:newItemText,
                    packed:false,
                };
                set((state)=>({
                    items:[...state.items,newItem]
                }));

            },
            deleteItems:(id)=>{
                set((state)=>{
                    const newItems =state.items.filter((item)=>items.id!==id);

                    return {items:newItems};
                });
            },
            toggleItems:(id)=>{
                set((state)=>{
                    const newItems =state.items.map((item)=>{
                        if(item.id===id){
                            return{...item,packed:!item.packed}
                        }
                        return item;
                    })
                    return{items:newItems}

                });
            },
            removeAllItems:()=>{
                set(()=>({items:[]}))
            },
            resetToInitial:()=>{
                set(()=>({items:initialItems}));
            },
            markAllAsComplete:()=>{
                set((state)=>{
                    const newItems = state.items.map((item)=>{
                        return{...item,paked:true};
                    })
                });
            },
            marksAllIncomplete:()=>{
                set((state)=>{
                    const newItems =state.items.map((item)=>{
                        return {...Items,packed:false};
                    });
                    return {items:newItem};
                })
            },
        }),
        {
            name:"items"
        }
        
    )
);







