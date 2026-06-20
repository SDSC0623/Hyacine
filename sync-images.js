import fs from 'fs'
import path from 'path'

const srcAssets = path.join(process.cwd(), 'src/assets')
const destAssets = path.join(process.cwd(), 'public/assets')

// 确保目标目录存在
if (!fs.existsSync(destAssets)) {
  fs.mkdirSync(destAssets, {
    recursive: true
  })
}

// 遍历 src/assets 下的所有子目录
const subDirs = fs.readdirSync(srcAssets)
for (const subDir of subDirs) {
  const srcSubDir = path.join(srcAssets, subDir)
  const destSubDir = path.join(destAssets, subDir)

  // 跳过非目录文件（如 .md 文件）
  if (!fs.statSync(srcSubDir).isDirectory()) continue

  // 确保子目录存在
  if (!fs.existsSync(destSubDir)) {
    fs.mkdirSync(destSubDir, {
      recursive: true
    })
  }

  // 清空子目标目录
  try {
    const existingFiles = fs.readdirSync(destSubDir)
    for (const file of existingFiles) {
      fs.unlinkSync(path.join(destSubDir, file))
    }
  } catch (err) {
    console.error(`删除子目录 ${destSubDir} 失败: ${err.message}`)
    continue
  }

  // 复制文件
  const files = fs.readdirSync(srcSubDir)
  for (const file of files) {
    const srcPath = path.join(srcSubDir, file)
    const destPath = path.join(destSubDir, file)
    fs.copyFileSync(srcPath, destPath)
    console.log(`已同步 [${subDir}]: ${file}`)
  }
}

// 统计总数
const totalFiles = fs.readdirSync(srcAssets)
  .filter(f => fs.statSync(path.join(srcAssets, f)).isDirectory())
  .reduce((sum, dir) => sum + fs.readdirSync(path.join(srcAssets, dir)).length, 0)

console.log(`\n同步完成！共 ${totalFiles} 个文件`)