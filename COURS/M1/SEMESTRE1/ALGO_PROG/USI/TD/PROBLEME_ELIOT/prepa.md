```bash
#!/usr/bin/env bash
echo "#!/bin/bash" >> $1.sh
emacs $1.sh &
```