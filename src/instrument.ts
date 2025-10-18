
declare global {
  interface Window {
    DD_RUM: any;
  }
}


export const startNewView = (viewName:string) => {
  window.DD_RUM.startView({
    name: viewName,
  })
}