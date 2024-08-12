export interface NewInventoryItem {
  nombre: string;
  ingrediente_principal: string;
  formato?: string | null;
  volumen: string;
  via: string;
  fecha_vencimiento: string;
  laboratorio?: string | null;
  origen?: string | null;
  estado: string;
  fecha_registro: string;
  ubicacion: string;
  tipo: string;
}

export type InventoryItem = { id: number } & NewInventoryItem;
