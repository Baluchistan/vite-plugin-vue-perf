import MagicString from 'magic-string'

export function transformVue(code: string, id: string, options: any) {
  const s = new MagicString(code)
  
  // TODO: Implement AST parsing
  
  return {
    code: s.toString(),
    map: s.generateMap({ hires: true })
  }
}\n