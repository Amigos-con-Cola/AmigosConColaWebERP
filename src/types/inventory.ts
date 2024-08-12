export interface NewInventoryItem {
  nombre: string;
  ingrediente_principal: string;
  formato: string;
  volumen: string;
  via: string;
  fecha_vencimiento: string;
  laboratorio: string;
  origen: string;
  estado: string;
  fecha_registro: string;
  caja: string;
  tipo: string;
}

export type InventoryItem = { id: number } & NewInventoryItem;
