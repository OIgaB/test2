import * as S from "./Grid.styled"

export const Grid = ({
  ItemComponent,
  data: defaultData,
  column = 1,  // 2
  $gap,
  row: defaultRow, // 3
  ...props
}) => {                                          //   5/2=2.5 => 3
  const row = defaultRow || Math.ceil(defaultData.length / column)

  const data = defaultData.length % 2 ? [...defaultData, {}] : defaultData
  // (6)[    
  //  { title: 'test1' }, // 0
  //  { title: 'test2' }, // 1
  //  { title: 'test3' }, // 2
  //  { title: 'test4' }, // 3
  //  { title: 'test5' }, // 4
  //  {} // 5
  // ]

  // якщо остача від ділення = 1 чи більше (наприкл, 5 % 2 => 1),
  // то [...defaultData, {}] 

  // якщо остача від ділення = 0 (наприкл, 4 % 2 => 0),
  // то defaultData

  // const rows = new Array(row) // (3)[пусто × 3] //всередині 3 ел-та undefined
  // const rows = new Array(row).fill([]) // (3) [Array(0), Array(0), Array(0)]
  // створили масив з 3 рядків

  const rows = new Array(row)
    .fill([])
    .map((_, index) => data.slice(index * column, (index + 1) * column))
    // наповнюємо масив копіями шматків елементів дати
    //                                 0*2=0                 1*2=2 // indexes
    //                                 1*2=2                 2*2=4
    //                                 2*2=4                 3*2=6
    // (3) [Array(2), Array(2), Array(2)] 
    // [
    //   [ { title: 'test1' }, { title: 'test2' } ]
    //   [ { title: 'test3' }, { title: 'test4' } ]
    //   [ { title: 'test5' }, {} ]
    // ]
    // в кожному рядку по 2 колонки

  return (
    <div {...props}>
      {/* rows - масив масивів */}
      {rows.map((rowItems, rowIndex) => (
        <S.RowContainer
          key={rowIndex}
          style={{ marginBottom: rowIndex < rows.length - 1 ? `${$gap}px` : 0 }}
        >
          {/* rowItems - масив об'єктів */}
          {rowItems.map((item, index) => (
            <S.ItemContainer
              key={index}
              style={{ marginRight: index < column - 1 ? `${$gap}px` : 0 }}
            >
              {Object.keys(item).length > 0 && <ItemComponent {...item} />}
            </S.ItemContainer>
          ))}
        </S.RowContainer>
      ))}
    </div>
  )
}
