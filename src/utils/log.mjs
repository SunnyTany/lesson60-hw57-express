//фарбує відповіді у консолі

import chalk from 'chalk'

const log = (...args) => {
  const color = args.pop()

  if (typeof chalk[color] !== 'function') {
    console.error(`Invalid color provided: ${color}`)
    return
  }

  const message = args.map(arg => typeof arg === 'string' ? arg : JSON.stringify(arg)).join(' ')

  console.log(chalk[color](message))
}

export default log