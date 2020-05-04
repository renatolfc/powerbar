#!/bin/bash

export PATH=/usr/local/bin:$PATH
command -v yabai > /dev/null 2>&1 || { echo "{\"error\":\"yabai binary not found\"}"; exit 1; }

DESKTOPS_PRIMARY=$(yabai -m query --spaces --display 1)

echo $(cat <<-EOF
{
	"desktops_primary": $DESKTOPS_PRIMARY
}
EOF
)
